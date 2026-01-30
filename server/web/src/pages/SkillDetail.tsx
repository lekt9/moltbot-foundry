import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSkillSummary, downloadSkill, type SkillDetail as SkillDetailType, type SkillPackage } from "../lib/api";
import { useWallet } from "../context/WalletContext";

export function SkillDetail() {
  const { id } = useParams<{ id: string }>();
  const { connected, publicKey, connect, signTransaction } = useWallet();
  const [skill, setSkill] = useState<SkillDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState<SkillPackage | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getSkillSummary(id)
      .then(setSkill)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  async function handleDownload() {
    if (!id) return;

    if (!connected || !publicKey) {
      await connect();
      return;
    }

    setDownloading(true);
    setError(null);
    try {
      const pkg = await downloadSkill(id, signTransaction, publicKey);
      setDownloaded(pkg);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setDownloading(false);
    }
  }

  if (loading) {
    return (
      <div className="detail-loading">
        <div className="loading-spinner" />
        <span>Loading skill...</span>
      </div>
    );
  }

  if (error && !skill) {
    return (
      <div className="detail-error">
        <p>{error}</p>
        <Link to="/" className="back-link">
          ← Back to marketplace
        </Link>
      </div>
    );
  }

  if (!skill) return null;

  return (
    <div className="detail">
      <Link to="/" className="back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to marketplace
      </Link>

      <div className="detail-header">
        <div className="detail-title-row">
          <h1>{skill.service}</h1>
          <span className="detail-auth">{skill.authMethodType}</span>
        </div>
        <div className="detail-url">{skill.baseUrl}</div>

        <div className="detail-stats">
          <div className="detail-stat">
            <div className="detail-stat-value">{skill.endpointCount}</div>
            <div className="detail-stat-label">Endpoints</div>
          </div>
          <div className="detail-stat">
            <div className="detail-stat-value">{skill.downloadCount}</div>
            <div className="detail-stat-label">Downloads</div>
          </div>
          <div className="detail-stat">
            <div className="detail-stat-value">{skill.updatedAt?.split("T")[0]}</div>
            <div className="detail-stat-label">Updated</div>
          </div>
        </div>

        {skill.tags.length > 0 && (
          <div className="detail-tags">
            {skill.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="detail-creator">
          <span className="label">Creator:</span>
          <code>{skill.creatorWallet.slice(0, 8)}...{skill.creatorWallet.slice(-8)}</code>
        </div>
      </div>

      <h2>Endpoints</h2>
      <div className="endpoint-list">
        {skill.endpoints.map((ep, i) => (
          <div key={i} className="endpoint">
            <span className={`method method-${ep.method.toLowerCase()}`}>
              {ep.method}
            </span>
            <code className="path">{ep.path}</code>
          </div>
        ))}
      </div>

      <div className="download-section">
        {downloaded ? (
          <div className="download-success">
            <h3>⚒ Skill Package Forged</h3>
            <div className="download-files">
              <div className="download-file">
                <h4>SKILL.md</h4>
                <pre>
                  {downloaded.skillMd.slice(0, 800)}
                  {downloaded.skillMd.length > 800 ? "\n..." : ""}
                </pre>
              </div>
              <div className="download-file">
                <h4>api.ts</h4>
                <pre>
                  {downloaded.apiTemplate.slice(0, 800)}
                  {downloaded.apiTemplate.length > 800 ? "\n..." : ""}
                </pre>
              </div>
            </div>
          </div>
        ) : (
          <>
            <button
              className="download-btn"
              onClick={handleDownload}
              disabled={downloading}
            >
              {downloading ? (
                <>
                  <div className="loading-spinner" style={{ width: 16, height: 16, marginBottom: 0, borderWidth: 2 }} />
                  Processing payment...
                </>
              ) : connected ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Package
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Connect Wallet
                </>
              )}
            </button>
            {error && <p className="download-error">{error}</p>}
            <p className="download-note">
              Payment via x402 USDC on Solana · Creator earns 3% · Treasury earns 30%
            </p>
          </>
        )}
      </div>
    </div>
  );
}
