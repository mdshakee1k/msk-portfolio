"use client";

import { useState } from "react";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  filename: string;
}

export default function ResumeViewer({ isOpen, onClose, filename }: ResumeViewerProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    window.location.href = `/api/download-cv`;
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "var(--color-bg1)",
          borderRadius: 12,
          border: "1px solid var(--color-border)",
          width: "100%",
          maxWidth: "900px",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: "16px 24px",
            background: "var(--color-bg2)",
            borderBottom: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "var(--color-heading)" }}>
              Resume Preview
            </h3>
            <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--color-muted)" }}>
              {filename}
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button
              onClick={handleDownload}
              style={{
                padding: "8px 14px",
                background: "var(--color-accent)",
                color: "white",
                border: "none",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.9")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </button>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                fontSize: 24,
                cursor: "pointer",
                color: "var(--color-muted)",
                padding: 0,
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div
          style={{
            flex: 1,
            overflow: "auto",
            background: "var(--color-bg1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <iframe
            src={`/cv/${filename}#toolbar=0`}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "0 0 12px 12px",
            }}
            title="Resume Preview"
          />
        </div>
      </div>
    </div>
  );
}
