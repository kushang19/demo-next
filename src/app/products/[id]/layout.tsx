export default function ProductLayout({children} : {children: React.ReactNode}){
  return (
    <div>
        {children}
        <div>
            <h2>Feature Product Section</h2>
        </div>
    </div>
  );
}