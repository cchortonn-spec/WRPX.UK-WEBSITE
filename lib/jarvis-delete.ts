import { NextResponse } from "next/server";

export function requireDeleteConfirmation(body: unknown) {
  if (
    typeof body !== "object" ||
    body === null ||
    (body as { confirm?: unknown }).confirm !== "DELETE"
  ) {
    return NextResponse.json(
      {
        error:
          'Confirmation required. Type DELETE and confirm again to permanently remove this item.',
      },
      { status: 400 }
    );
  }

  return null;
}
