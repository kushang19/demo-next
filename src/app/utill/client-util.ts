import "client-only"
export const clientSideFunction = () => {
    console.log(`
        use window object,
        DOM Manupulation,
        use localstorage
        `);
    
    return "Client Response"
}