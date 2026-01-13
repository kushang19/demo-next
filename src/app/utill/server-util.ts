import "server-only"
export const serverSideFunction = () => {
    console.log(`use multiple library,
        database connection,
        use env data
        `);
    
    return "Server Response"
}