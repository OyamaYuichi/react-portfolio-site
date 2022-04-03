export const Header = () => {
  // const componentName = 'Header';
  // ↓関数
  const componentName = () => 'Header';
  return (
    <div className="test-wrapper">
      {/* このコンポーネントの名前は{componentName}です。 */}
      このコンポーネントの名前は{componentName()}です。
    </div> // ここはHTMLではなく、JSX
  );
};