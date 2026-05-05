import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import API from "../lib/api";

const AuthContext = createContext(null);

function featureKeysInclude(planContext, key) {
  if (!key) return true;
  if (planContext == null) {
    return false;
  }
  const keys = planContext.feature_keys;
  if (!Array.isArray(keys)) return false;
  return keys.includes(key);
}

function computePlanAccess(planContext) {
  if (!planContext) {
    return { projectsLimit: 0, projectCount: 0, canCreateProject: false };
  }
  const lim = Number(planContext.projects_limit);
  const cnt = Number(planContext.project_count);
  const projectsLimit = Number.isFinite(lim) && lim > 0 ? lim : 1;
  const projectCount = Number.isFinite(cnt) ? cnt : 0;
  return {
    projectsLimit,
    projectCount,
    canCreateProject: projectCount < projectsLimit,
  };
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [planContext, setPlanContext] = useState(null);
  const [orgContext, setOrgContext] = useState(null);

  const refreshPlanContext = useCallback(async () => {
    try {
      const { data } = await API.get("/me/plan-context");
      setPlanContext(data);
      return data;
    } catch {
      setPlanContext(null);
      return null;
    }
  }, []);

  const refreshOrgContext = useCallback(async () => {
    try {
      const { data } = await API.get("/org/context");
      setOrgContext(data);
      return data;
    } catch {
      setOrgContext(null);
      return null;
    }
  }, []);

  const checkAuth = useCallback(async () => {
    try {
      const { data } = await API.get("/auth/me");
      setUser(data);
      if (data) {
        await Promise.all([refreshPlanContext(), refreshOrgContext()]);
      } else {
        setPlanContext(null);
        setOrgContext(null);
      }
    } catch {
      setUser(false);
      setPlanContext(null);
      setOrgContext(null);
    } finally {
      setLoading(false);
    }
  }, [refreshPlanContext, refreshOrgContext]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (email, password) => {
    const { data } = await API.post("/auth/login", { email, password });
    setUser(data);
    if (data) await Promise.all([refreshPlanContext(), refreshOrgContext()]);
    return data;
  };

  const register = async (payload) => {
    const { data } = await API.post("/auth/register", payload);
    setUser(data);
    if (data) await Promise.all([refreshPlanContext(), refreshOrgContext()]);
    return data;
  };

  const loginWithGoogle = async (idToken) => {
    const { data } = await API.post("/auth/google", { id_token: idToken });
    setUser(data);
    if (data) await Promise.all([refreshPlanContext(), refreshOrgContext()]);
    return data;
  };

  const logout = async () => {
    try {
      await API.post("/auth/logout");
    } catch {}
    setUser(false);
    setPlanContext(null);
    setOrgContext(null);
  };

  const hasFeature = useCallback((key) => featureKeysInclude(planContext, key), [planContext]);
  const hasPermission = useCallback(
    (permission) => {
      if (!permission) return true;
      const list = orgContext?.permissions;
      return Array.isArray(list) ? list.includes(permission) : false;
    },
    [orgContext],
  );

  const planAccess = useMemo(() => computePlanAccess(planContext), [planContext]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        planContext,
        orgContext,
        planAccess,
        hasFeature,
        hasPermission,
        refreshPlanContext,
        refreshOrgContext,
        login,
        register,
        loginWithGoogle,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
