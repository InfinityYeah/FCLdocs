import React from 'react';
import Link from '@docusaurus/Link';

export default function ContributorCard({
  name,
  avatar,
  qq,
  bilibili,
  contributions,
}) {
  // 判断值是否为 0、空字符串、null 或 undefined
  const isEmpty = (val) => val === 0 || val === '0' || val === '' || val == null;

  const hasQQ = !isEmpty(qq);
  const hasBilibili = !isEmpty(bilibili);

  const cardStyle = {
    background: 'var(--ifm-card-background-color, var(--ifm-background-surface-color))',
    border: '1px solid var(--ifm-color-emphasis-200)',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    transition: 'all 0.3s ease',
    textAlign: 'center',
  };

  const avatarStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid var(--ifm-color-primary)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  };

  const nameStyle = {
    fontSize: '1.15rem',
    fontWeight: 700,
    color: 'var(--ifm-heading-color)',
    margin: 0,
  };

  const contributionsStyle = {
    fontSize: '0.9rem',
    color: 'var(--ifm-color-emphasis-600)',
    lineHeight: 1.6,
    margin: 0,
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const btnBase = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: 500,
    textDecoration: 'none',
    transition: 'all 0.2s',
    cursor: 'pointer',
    border: 'none',
  };

  const qqBtnStyle = {
    ...btnBase,
    background: '#12B7F5',
    color: '#fff',
  };

  const biliBtnStyle = {
    ...btnBase,
    background: '#FB7299',
    color: '#fff',
  };

  return (
    <div className="contributor-card" style={cardStyle}>
      <style>{`
        .contributor-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          border-color: var(--ifm-color-primary-lighter);
        }
        [data-theme='dark'] .contributor-card {
          background: rgba(255,255,255,0.03);
          border-color: rgba(255,255,255,0.1);
        }
        [data-theme='dark'] .contributor-card:hover {
          background: rgba(255,255,255,0.05);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
      `}</style>

      {/* GitHub 头像 */}
      {!isEmpty(avatar) && (
        <img
          src={avatar}
          alt={`${name || '贡献者'} 的头像`}
          style={avatarStyle}
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      )}

      {/* 贡献者名字 */}
      {!isEmpty(name) && <h3 style={nameStyle}>{name}</h3>}

      {/* 贡献内容 */}
      {!isEmpty(contributions) && <p style={contributionsStyle}>{contributions}</p>}

      {/* QQ 和 B站 按钮 */}
      {(hasQQ || hasBilibili) && (
        <div style={buttonGroupStyle}>
          {hasQQ && (
            <Link
              to={`https://wpa.qq.com/msgrd?v=3&uin=${qq}&site=qq&menu=yes`}
              target="_blank"
              style={qqBtnStyle}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.38 3.55 1.07 5.11L2 22l5.17-1.55A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.74 0-3.37-.52-4.74-1.41l-.34-.22-3.07.92.99-3.01-.23-.37A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              QQ 联系
            </Link>
          )}
          {hasBilibili && (
            <Link
              to={bilibili}
              target="_blank"
              style={biliBtnStyle}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 01-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 01.16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
              </svg>
              B站主页
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
