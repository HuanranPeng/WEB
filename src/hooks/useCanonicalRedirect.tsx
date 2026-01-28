import { useEffect } from 'react';

const CANONICAL_HOST = 'www.huanranpeng.com';
const BASE_PATH = '/2026';
const HTTPS_BASE_URL = `https://${CANONICAL_HOST}${BASE_PATH}`;

export const useCanonicalRedirect = () => {
  useEffect(() => {
    const currentHost = window.location.hostname;
    const currentProtocol = window.location.protocol;
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    
    // Do not force canonical redirect on Vercel preview domains or localhost.
    // (Keeps preview deployments usable before custom domain is attached.)
    const isVercelDomain =
      currentHost.endsWith('.vercel.app') || currentHost.endsWith('.vercel.app.');
    const isLocalhost = currentHost.includes('localhost') || currentHost.includes('127.0.0.1');
    
    // For Vercel domains and localhost, still handle root path redirect to /2026
    if (isLocalhost || isVercelDomain) {
      // If on root path, redirect to /2026
      if (currentPath === '/' || currentPath === '') {
        const redirectUrl = `${window.location.protocol}//${currentHost}${BASE_PATH}${currentSearch}${currentHash}`;
        window.location.replace(redirectUrl);
      }
      return;
    }
    
    // Immediately redirect from trice.design to huanranpeng.com/2026
    if (currentHost === 'trice.design' || currentHost === 'www.trice.design') {
      const redirectUrl = `https://${CANONICAL_HOST}${BASE_PATH}${currentPath === '/' ? '' : currentPath}${currentSearch}${currentHash}`;
      window.location.replace(redirectUrl);
      return;
    }
    
    // Build target path - ensure it starts with /2026
    let targetPath = currentPath;
    
    // If path is root (/), redirect to /2026
    if (targetPath === '/' || targetPath === '') {
      targetPath = BASE_PATH;
    } 
    // If path doesn't start with /2026, prepend it
    else if (!targetPath.startsWith(BASE_PATH)) {
      // Remove leading slash if present to avoid double slashes
      const cleanPath = targetPath.startsWith('/') ? targetPath.slice(1) : targetPath;
      targetPath = `${BASE_PATH}/${cleanPath}`;
    }
    
    // Remove trailing slash (except for /2026 itself)
    if (targetPath !== BASE_PATH && targetPath.endsWith('/')) {
      targetPath = targetPath.slice(0, -1);
    }
    
    // Handle legacy /case-studies/* redirects to /case-study/*
    if (targetPath.includes('/case-studies/')) {
      targetPath = targetPath.replace('/case-studies/', '/case-study/');
    }
    
    // Build final URL
    const needsHostRedirect = currentHost !== CANONICAL_HOST;
    const needsProtocolRedirect = currentProtocol !== 'https:';
    const needsPathRedirect = targetPath !== currentPath;
    
    if (needsHostRedirect || needsProtocolRedirect || needsPathRedirect) {
      const redirectUrl = `https://${CANONICAL_HOST}${targetPath}${currentSearch}${currentHash}`;
      window.location.replace(redirectUrl);
    }
  }, []);
};