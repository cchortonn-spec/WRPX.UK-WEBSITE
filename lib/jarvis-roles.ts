export const JARVIS_ROLES = [
  "owner",
  "admin",
  "office",
  "estimator",
  "installer",
  "readonly",
] as const;

export type JarvisRole = (typeof JARVIS_ROLES)[number];

export const JARVIS_USER_STATUSES = ["active", "invited", "disabled"] as const;

export type JarvisUserStatus = (typeof JARVIS_USER_STATUSES)[number];

export const ROLE_LABELS: Record<JarvisRole, string> = {
  owner: "Owner",
  admin: "Admin",
  office: "Office",
  estimator: "Estimator",
  installer: "Installer",
  readonly: "Read only",
};

export const STATUS_LABELS: Record<JarvisUserStatus, string> = {
  active: "Active",
  invited: "Invited",
  disabled: "Disabled",
};

export function isJarvisRole(value: string): value is JarvisRole {
  return JARVIS_ROLES.includes(value as JarvisRole);
}
