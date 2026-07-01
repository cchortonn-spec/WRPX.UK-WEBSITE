import type { JarvisRole } from "@/lib/jarvis-roles";
import type { JarvisUser } from "@/lib/jarvis-types";

const FINANCIAL_ROLES: JarvisRole[] = ["owner", "admin"];
const USER_MANAGEMENT_ROLES: JarvisRole[] = ["owner"];
const ANALYTICS_ROLES: JarvisRole[] = ["owner", "admin"];
const LEAD_EDIT_ROLES: JarvisRole[] = [
  "owner",
  "admin",
  "office",
  "estimator",
];
const PHOTO_UPLOAD_ROLES: JarvisRole[] = [
  "owner",
  "admin",
  "office",
  "estimator",
  "installer",
];

export function canViewFinancials(user: JarvisUser | null) {
  if (!user) return false;
  return FINANCIAL_ROLES.includes(user.role);
}

export function canManageUsers(user: JarvisUser | null) {
  if (!user) return false;
  return USER_MANAGEMENT_ROLES.includes(user.role);
}

export function canViewAnalytics(user: JarvisUser | null) {
  if (!user) return false;
  return ANALYTICS_ROLES.includes(user.role);
}

export function canEditLead(user: JarvisUser | null) {
  if (!user) return false;
  return LEAD_EDIT_ROLES.includes(user.role);
}

export function canViewProject(user: JarvisUser | null) {
  if (!user) return false;
  return true;
}

export function canUploadPhotos(user: JarvisUser | null) {
  if (!user) return false;
  return PHOTO_UPLOAD_ROLES.includes(user.role);
}

export function canViewFullBriefing(user: JarvisUser | null) {
  if (!user) return false;
  return ["owner", "admin"].includes(user.role);
}

export function canViewOfficeBriefing(user: JarvisUser | null) {
  if (!user) return false;
  return ["owner", "admin", "office"].includes(user.role);
}

export function canViewInstallerBriefing(user: JarvisUser | null) {
  if (!user) return false;
  return user.role === "installer";
}
