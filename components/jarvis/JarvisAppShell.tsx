"use client";

import { useEffect } from "react";
import { SignIn, useAuth } from "@clerk/nextjs";
import { JarvisSidebar } from "@/components/jarvis/JarvisSidebar";
import { JarvisTopBar } from "@/components/jarvis/JarvisTopBar";

const JARVIS_HOME = "/jarvis/";

const signInAppearance = {
  variables: {
    colorText: "#ffffff",
    colorTextSecondary: "#e8ebe6",
    colorInputText: "#ffffff",
    colorInputBackground: "rgba(0, 0, 0, 0.25)",
    colorBackground: "transparent",
    colorPrimary: "#b7ff3c",
  },
  elements: {
    rootBox: "jarvis-clerk-root",
    card: "jarvis-clerk-card",
    headerTitle: "jarvis-clerk-hidden",
    headerSubtitle: "jarvis-clerk-hidden",
    socialButtonsBlockButton: "jarvis-clerk-social-btn",
    formButtonPrimary: "jarvis-button jarvis-button-primary",
    formFieldInput: "jarvis-input jarvis-clerk-input",
    formFieldLabel: "jarvis-clerk-label",
    formFieldAction: "jarvis-clerk-link",
    identityPreview: "jarvis-clerk-identity",
    identityPreviewText: "jarvis-clerk-identity-text",
    identityPreviewEditButton: "jarvis-clerk-link",
    formFieldInputShowPasswordButton: "jarvis-clerk-link",
    otpCodeFieldInput: "jarvis-clerk-otp-input",
    otpCodeFieldInputs: "jarvis-clerk-otp-inputs",
    alertText: "jarvis-clerk-alert-text",
    formResendCodeLink: "jarvis-clerk-link",
    footerAction: "jarvis-clerk-hidden",
    footer: "jarvis-clerk-footer",
    main: "jarvis-clerk-main",
  },
};

type JarvisAppShellProps = {
  children: React.ReactNode;
  pageTitle?: string;
  topBarAction?: React.ReactNode;
};

export function JarvisAppShell({
  children,
  pageTitle = "Jarvis",
  topBarAction,
}: JarvisAppShellProps) {
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    if (window.location.hash.startsWith("#/")) {
      window.location.replace(JARVIS_HOME);
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return (
      <div className="jarvis-page">
        <div className="jarvis-login-shell">
          <p className="jarvis-muted">Loading Jarvis...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="jarvis-page">
        <div className="jarvis-login-shell">
          <div className="jarvis-login-card jarvis-clerk-sign-in">
            <p className="jarvis-eyebrow">WRPX internal</p>
            <h1 className="jarvis-title">Jarvis</h1>
            <p className="jarvis-muted">
              Sign in with your invited WRPX account to open the business
              dashboard.
            </p>
            <SignIn
              routing="hash"
              signUpUrl={undefined}
              fallbackRedirectUrl={JARVIS_HOME}
              forceRedirectUrl={JARVIS_HOME}
              appearance={signInAppearance}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="jarvis-page">
      <div className="jarvis-shell">
        <JarvisSidebar />
        <div className="jarvis-main">
          <JarvisTopBar title={pageTitle} action={topBarAction} />
          <div className="jarvis-content">{children}</div>
        </div>
      </div>
    </div>
  );
}
