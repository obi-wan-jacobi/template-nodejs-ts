module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testMatch: ["**/tests/**/*spec.ts?(x)"],
    testPathIgnorePatterns: ["/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};