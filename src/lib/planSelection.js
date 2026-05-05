const PLAN_KEY = "selectedPlan";

export function saveSelectedPlan(planId) {
  if (!planId) return;
  try {
    window.localStorage.setItem(PLAN_KEY, planId);
  } catch {
    // ignore localStorage failures
  }
}

export function consumeSelectedPlan() {
  try {
    const plan = window.localStorage.getItem(PLAN_KEY);
    if (plan) window.localStorage.removeItem(PLAN_KEY);
    return plan || "";
  } catch {
    return "";
  }
}

export function peekSelectedPlan() {
  try {
    return window.localStorage.getItem(PLAN_KEY) || "";
  } catch {
    return "";
  }
}
