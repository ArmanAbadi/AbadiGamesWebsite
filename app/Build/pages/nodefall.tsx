// pages/nodefall.js
export default function NodeFall() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/nodefall/index.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="NodeFall Game"
      />
    </div>
  );
}