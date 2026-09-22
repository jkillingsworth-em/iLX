import { Download, ExternalLink } from "lucide-react";
import type { CutsheetFile } from "@/data/cutsheets";
import { driveDownloadUrl, drivePreviewUrl, driveViewUrl } from "@/data/cutsheets";

export function DocViewer({
  label,
  previewHref,
  openHref,
  downloadHref,
}: {
  label: string;
  previewHref: string;
  openHref: string;
  downloadHref?: string;
}) {
  const preview = encodeURI(previewHref);
  const open = encodeURI(openHref);
  const download = encodeURI(downloadHref ?? openHref);

  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface">
      <div className="flex h-11 items-center justify-between gap-3 border-b border-border px-3">
        <p className="min-w-0 truncate font-display text-lg tracking-wide">{label}</p>
        <div className="flex shrink-0 gap-1">
          <a
            href={open}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-sm px-2 text-xs text-muted hover:text-fg"
          >
            Open
            <ExternalLink className="size-3.5" />
          </a>
          <a
            href={download}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-1.5 rounded-sm px-2 text-xs text-muted hover:text-fg"
          >
            Download
            <Download className="size-3.5" />
          </a>
        </div>
      </div>
      <iframe title={label} src={preview} className="h-[min(70vh,36rem)] w-full bg-bg" allow="fullscreen" />
    </div>
  );
}

export function CutsheetViewer({
  file,
  label,
}: {
  file: CutsheetFile;
  label: string;
}) {
  return (
    <DocViewer
      label={label}
      previewHref={drivePreviewUrl(file.fileId)}
      openHref={driveViewUrl(file.fileId)}
      downloadHref={driveDownloadUrl(file.fileId)}
    />
  );
}

export function CutsheetMissing({ modelId }: { modelId: string }) {
  return (
    <div className="rounded-md border border-dashed border-border bg-surface px-3 py-4">
      <p className="font-display text-lg tracking-wide">No cut sheet on file</p>
      <p className="mt-1 text-sm text-muted">
        {modelId} does not have a mechanical PDF in the plant cut-sheet library.
      </p>
    </div>
  );
}

export function ManualMissing({ modelId }: { modelId: string }) {
  return (
    <div className="rounded-md border border-dashed border-border bg-surface px-3 py-4">
      <p className="font-display text-lg tracking-wide">No owner’s manual on file</p>
      <p className="mt-1 text-sm text-muted">
        {modelId} is not published on the factory manuals CDN.
      </p>
    </div>
  );
}
