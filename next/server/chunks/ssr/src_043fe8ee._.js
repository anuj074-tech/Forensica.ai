module.exports = {

"[project]/src/components/common/main-header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MainHeader": (()=>MainHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
;
;
function MainHeader({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarTrigger"], {
                className: "flex md:hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/common/main-header.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-headline text-xl font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/common/main-header.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/main-header.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/ai/flows/data:30ce2d [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40b6f19be3538c4b7b408a0e8719241a732d252bbe":"analyzeWitnessStatements"},"src/ai/flows/analyze-witness-statements.ts",""] */ __turbopack_context__.s({
    "analyzeWitnessStatements": (()=>analyzeWitnessStatements)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var analyzeWitnessStatements = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40b6f19be3538c4b7b408a0e8719241a732d252bbe", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "analyzeWitnessStatements"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYW5hbHl6ZS13aXRuZXNzLXN0YXRlbWVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgQSBmbG93IGZvciB0cmFuc2NyaWJpbmcgYW5kIGFuYWx5emluZyB3aXRuZXNzIHN0YXRlbWVudHMgdG8gaWRlbnRpZnkga2V5IGVudGl0aWVzLFxuICogY29udHJhZGljdGlvbnMsIGFuZCBwb3RlbnRpYWwgZGVjZXB0aW9uLlxuICpcbiAqIC0gYW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzIC0gQSBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgdGhlIGFuYWx5c2lzIG9mIHdpdG5lc3Mgc3RhdGVtZW50cy5cbiAqIC0gQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzSW5wdXQgLSBUaGUgaW5wdXQgdHlwZSBmb3IgdGhlIGFuYWx5emVXaXRuZXNzU3RhdGVtZW50cyBmdW5jdGlvbi5cbiAqIC0gQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzT3V0cHV0IC0gVGhlIHJldHVybiB0eXBlIGZvciB0aGUgYW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzIGZ1bmN0aW9uLlxuICovXG5cbmltcG9ydCB7YWl9IGZyb20gJ0AvYWkvZ2Vua2l0JztcbmltcG9ydCB7en0gZnJvbSAnZ2Vua2l0JztcblxuY29uc3QgQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHN0YXRlbWVudDogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZSgnVGhlIHdpdG5lc3Mgc3RhdGVtZW50IHRvIGJlIGFuYWx5emVkLicpLFxufSk7XG5leHBvcnQgdHlwZSBBbmFseXplV2l0bmVzc1N0YXRlbWVudHNJbnB1dCA9IHouaW5mZXI8dHlwZW9mIEFuYWx5emVXaXRuZXNzU3RhdGVtZW50c0lucHV0U2NoZW1hPjtcblxuY29uc3QgQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICBlbnRpdGllczogei5hcnJheShcbiAgICB6LnN0cmluZygpLmRlc2NyaWJlKCdLZXkgZW50aXRpZXMgaWRlbnRpZmllZCBpbiB0aGUgd2l0bmVzcyBzdGF0ZW1lbnQuJylcbiAgKS5kZXNjcmliZSgnQSBsaXN0IG9mIGtleSBlbnRpdGllcyBpZGVudGlmaWVkIGluIHRoZSB3aXRuZXNzIHN0YXRlbWVudC4nKSxcbiAgY29udHJhZGljdGlvbnM6IHouYXJyYXkoXG4gICAgei5zdHJpbmcoKS5kZXNjcmliZSgnUG90ZW50aWFsIGNvbnRyYWRpY3Rpb25zIGZvdW5kIGluIHRoZSB3aXRuZXNzIHN0YXRlbWVudC4nKVxuICApLmRlc2NyaWJlKCdBIGxpc3Qgb2YgcG90ZW50aWFsIGNvbnRyYWRpY3Rpb25zIGZvdW5kIGluIHRoZSB3aXRuZXNzIHN0YXRlbWVudC4nKSxcbiAgZGVjZXB0aW9uU2NvcmU6IHpcbiAgICAubnVtYmVyKClcbiAgICAuZGVzY3JpYmUoJ0Egc2NvcmUgaW5kaWNhdGluZyB0aGUgbGlrZWxpaG9vZCBvZiBkZWNlcHRpb24gaW4gdGhlIHdpdG5lc3Mgc3RhdGVtZW50LicpLFxuICBzdW1tYXJ5OiB6LnN0cmluZygpLmRlc2NyaWJlKCdBIHN1bW1hcnkgb2YgdGhlIHdpdG5lc3Mgc3RhdGVtZW50LicpLFxufSk7XG5leHBvcnQgdHlwZSBBbmFseXplV2l0bmVzc1N0YXRlbWVudHNPdXRwdXQgPSB6LmluZmVyPHR5cGVvZiBBbmFseXplV2l0bmVzc1N0YXRlbWVudHNPdXRwdXRTY2hlbWE+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzKFxuICBpbnB1dDogQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzSW5wdXRcbik6IFByb21pc2U8QW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzT3V0cHV0PiB7XG4gIHJldHVybiBhbmFseXplV2l0bmVzc1N0YXRlbWVudHNGbG93KGlucHV0KTtcbn1cblxuY29uc3QgYW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzUHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ2FuYWx5emVXaXRuZXNzU3RhdGVtZW50c1Byb21wdCcsXG4gIGlucHV0OiB7c2NoZW1hOiBBbmFseXplV2l0bmVzc1N0YXRlbWVudHNJbnB1dFNjaGVtYX0sXG4gIG91dHB1dDoge3NjaGVtYTogQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzT3V0cHV0U2NoZW1hfSxcbiAgcHJvbXB0OiBgWW91IGFyZSBhbiBBSSBleHBlcnQgaW4gYW5hbHl6aW5nIHdpdG5lc3Mgc3RhdGVtZW50cyBpbiBjcmltaW5hbCBpbnZlc3RpZ2F0aW9ucy5cblxuICBZb3VyIHRhc2sgaXMgdG8gYW5hbHl6ZSB0aGUgcHJvdmlkZWQgd2l0bmVzcyBzdGF0ZW1lbnQsIGlkZW50aWZ5IGtleSBlbnRpdGllcywgZGV0ZWN0IHBvdGVudGlhbCBjb250cmFkaWN0aW9ucywgYW5kIGFzc2VzcyB0aGUgbGlrZWxpaG9vZCBvZiBkZWNlcHRpb24uXG5cbiAgU3RhdGVtZW50OiB7e3tzdGF0ZW1lbnR9fX1cblxuICBPdXRwdXQ6XG4gIC0gZW50aXRpZXM6IEEgbGlzdCBvZiBrZXkgZW50aXRpZXMgKHBlcnNvbnMsIHBsYWNlcywgdGhpbmdzKSBtZW50aW9uZWQgaW4gdGhlIHN0YXRlbWVudC5cbiAgLSBjb250cmFkaWN0aW9uczogQW55IGluY29uc2lzdGVuY2llcyBvciBjb250cmFkaWN0aW9ucyB3aXRoaW4gdGhlIHN0YXRlbWVudCBpdHNlbGYgb3IgY29tcGFyZWQgdG8gY29tbW9uIHNlbnNlLlxuICAtIGRlY2VwdGlvblNjb3JlOiBBIG51bWVyaWNhbCBzY29yZSAoMC0xLCB3aGVyZSAxIGlzIG1vc3QgbGlrZWx5IHRvIGJlIGxpZXMpIGluZGljYXRpbmcgdGhlIHByb2JhYmlsaXR5IG9mIGRlY2VwdGlvbiBpbiB0aGUgc3RhdGVtZW50IGJhc2VkIG9uIGxpbmd1aXN0aWMgY3VlcyBhbmQgaW5jb25zaXN0ZW5jaWVzLlxuICAtIHN1bW1hcnk6IEEgY29uY2lzZSBzdW1tYXJ5IG9mIHRoZSB3aXRuZXNzIHN0YXRlbWVudC5cbiAgUGxlYXNlIGZvcm1hdCB5b3VyIG91dHB1dCBhcyBhIEpTT04gb2JqZWN0LlxuYCxcbn0pO1xuXG5jb25zdCBhbmFseXplV2l0bmVzc1N0YXRlbWVudHNGbG93ID0gYWkuZGVmaW5lRmxvdyhcbiAge1xuICAgIG5hbWU6ICdhbmFseXplV2l0bmVzc1N0YXRlbWVudHNGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogQW5hbHl6ZVdpdG5lc3NTdGF0ZW1lbnRzSW5wdXRTY2hlbWEsXG4gICAgb3V0cHV0U2NoZW1hOiBBbmFseXplV2l0bmVzc1N0YXRlbWVudHNPdXRwdXRTY2hlbWEsXG4gIH0sXG4gIGFzeW5jIGlucHV0ID0+IHtcbiAgICBjb25zdCB7b3V0cHV0fSA9IGF3YWl0IGFuYWx5emVXaXRuZXNzU3RhdGVtZW50c1Byb21wdChpbnB1dCk7XG4gICAgcmV0dXJuIG91dHB1dCE7XG4gIH1cbik7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjRUQW1Dc0IifQ==
}}),
"[project]/src/ai/flows/data:847924 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"402d3e5203ae9408c53d67ef394ef2f457196b4eb1":"reconstructCrimeScene3D"},"src/ai/flows/reconstruct-crime-scene-3d.ts",""] */ __turbopack_context__.s({
    "reconstructCrimeScene3D": (()=>reconstructCrimeScene3D)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var reconstructCrimeScene3D = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("402d3e5203ae9408c53d67ef394ef2f457196b4eb1", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "reconstructCrimeScene3D"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVjb25zdHJ1Y3QtY3JpbWUtc2NlbmUtM2QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgQSBmbG93IGZvciByZWNvbnN0cnVjdGluZyBhIGNyaW1lIHNjZW5lIGluIDNEIGZyb20gaW1hZ2VzIGFuZCB2aWRlb3MuXG4gKlxuICogLSByZWNvbnN0cnVjdENyaW1lU2NlbmUzRCAtIEEgZnVuY3Rpb24gdGhhdCBoYW5kbGVzIHRoZSAzRCByZWNvbnN0cnVjdGlvbiBwcm9jZXNzLlxuICogLSBSZWNvbnN0cnVjdENyaW1lU2NlbmUzRElucHV0IC0gVGhlIGlucHV0IHR5cGUgZm9yIHRoZSByZWNvbnN0cnVjdENyaW1lU2NlbmUzRCBmdW5jdGlvbi5cbiAqIC0gUmVjb25zdHJ1Y3RDcmltZVNjZW5lM0RPdXRwdXQgLSBUaGUgcmV0dXJuIHR5cGUgZm9yIHRoZSByZWNvbnN0cnVjdENyaW1lU2NlbmUzRCBmdW5jdGlvbi5cbiAqL1xuXG5pbXBvcnQge2FpfSBmcm9tICdAL2FpL2dlbmtpdCc7XG5pbXBvcnQge3p9IGZyb20gJ2dlbmtpdCc7XG5cbmNvbnN0IFJlY29uc3RydWN0Q3JpbWVTY2VuZTNESW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG1lZGlhRGF0YVVyaTogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZShcbiAgICAgIFwiQSBwaG90byBvciB2aWRlbyBvZiBhIGNyaW1lIHNjZW5lLCBhcyBhIGRhdGEgVVJJIHRoYXQgbXVzdCBpbmNsdWRlIGEgTUlNRSB0eXBlIGFuZCB1c2UgQmFzZTY0IGVuY29kaW5nLiBFeHBlY3RlZCBmb3JtYXQ6ICdkYXRhOjxtaW1ldHlwZT47YmFzZTY0LDxlbmNvZGVkX2RhdGE+Jy5cIlxuICAgICksXG59KTtcbmV4cG9ydCB0eXBlIFJlY29uc3RydWN0Q3JpbWVTY2VuZTNESW5wdXQgPSB6LmluZmVyPHR5cGVvZiBSZWNvbnN0cnVjdENyaW1lU2NlbmUzRElucHV0U2NoZW1hPjtcblxuY29uc3QgUmVjb25zdHJ1Y3RDcmltZVNjZW5lM0RPdXRwdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHNjZW5lRGVzY3JpcHRpb246IHouc3RyaW5nKCkuZGVzY3JpYmUoJ0EgdGV4dCBkZXNjcmlwdGlvbiBvZiB0aGUgcmVjb25zdHJ1Y3RlZCAzRCBjcmltZSBzY2VuZS4nKSxcbiAgc3BhdGlhbE1vZGVsRGF0YVVyaTogelxuICAgIC5zdHJpbmcoKVxuICAgIC5vcHRpb25hbCgpXG4gICAgLmRlc2NyaWJlKFxuICAgICAgJ0EgZGF0YSBVUkkgY29udGFpbmluZyB0aGUgM0Qgc3BhdGlhbCBtb2RlbCBvZiB0aGUgY3JpbWUgc2NlbmUsIGlmIGF2YWlsYWJsZS4gRm9ybWF0OiBkYXRhOjxtb2RlbF9taW1ldHlwZT47YmFzZTY0LDxlbmNvZGVkX2RhdGE+LidcbiAgICApLFxufSk7XG5leHBvcnQgdHlwZSBSZWNvbnN0cnVjdENyaW1lU2NlbmUzRE91dHB1dCA9IHouaW5mZXI8dHlwZW9mIFJlY29uc3RydWN0Q3JpbWVTY2VuZTNET3V0cHV0U2NoZW1hPjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY29uc3RydWN0Q3JpbWVTY2VuZTNEKGlucHV0OiBSZWNvbnN0cnVjdENyaW1lU2NlbmUzRElucHV0KTogUHJvbWlzZTxSZWNvbnN0cnVjdENyaW1lU2NlbmUzRE91dHB1dD4ge1xuICByZXR1cm4gcmVjb25zdHJ1Y3RDcmltZVNjZW5lM0RGbG93KGlucHV0KTtcbn1cblxuY29uc3QgcHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ3JlY29uc3RydWN0Q3JpbWVTY2VuZTNEUHJvbXB0JyxcbiAgaW5wdXQ6IHtzY2hlbWE6IFJlY29uc3RydWN0Q3JpbWVTY2VuZTNESW5wdXRTY2hlbWF9LFxuICBvdXRwdXQ6IHtzY2hlbWE6IFJlY29uc3RydWN0Q3JpbWVTY2VuZTNET3V0cHV0U2NoZW1hfSxcbiAgcHJvbXB0OiBgWW91IGFyZSBhbiBleHBlcnQgaW4gY3JpbWUgc2NlbmUgcmVjb25zdHJ1Y3Rpb24uIFlvdSB3aWxsIGJlIHByb3ZpZGVkIHdpdGggYSBwaG90byBvciB2aWRlbyBvZiBhIGNyaW1lIHNjZW5lLlxuWW91ciB0YXNrIGlzIHRvIGFuYWx5emUgdGhlIG1lZGlhIGFuZCByZWNvbnN0cnVjdCB0aGUgZW52aXJvbm1lbnQgaW4gM0QsIHByb3ZpZGluZyBhIHRleHR1YWwgZGVzY3JpcHRpb24gb2YgdGhlIHNjZW5lLlxuXG5Db25zaWRlciBkZXRhaWxzIHN1Y2ggYXMgcm9vbSBzaXplLCBvYmplY3QgcGxhY2VtZW50LCBhbmQgcG90ZW50aWFsIGVudHJ5L2V4aXQgcG9pbnRzLlxuXG5IZXJlIGlzIHRoZSBjcmltZSBzY2VuZSBtZWRpYTpcblxue3ttZWRpYSB1cmw9bWVkaWFEYXRhVXJpfX1gLFxufSk7XG5cbmNvbnN0IHJlY29uc3RydWN0Q3JpbWVTY2VuZTNERmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAncmVjb25zdHJ1Y3RDcmltZVNjZW5lM0RGbG93JyxcbiAgICBpbnB1dFNjaGVtYTogUmVjb25zdHJ1Y3RDcmltZVNjZW5lM0RJbnB1dFNjaGVtYSxcbiAgICBvdXRwdXRTY2hlbWE6IFJlY29uc3RydWN0Q3JpbWVTY2VuZTNET3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgY29uc3Qge291dHB1dH0gPSBhd2FpdCBwcm9tcHQoaW5wdXQpO1xuICAgIHJldHVybiBvdXRwdXQhO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyVEFpQ3NCIn0=
}}),
"[project]/src/ai/flows/data:ad46e7 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40e38856acb4991c435853407fb1dcecfb030c0dd4":"detectIdentifyObjects"},"src/ai/flows/detect-identify-objects.ts",""] */ __turbopack_context__.s({
    "detectIdentifyObjects": (()=>detectIdentifyObjects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var detectIdentifyObjects = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40e38856acb4991c435853407fb1dcecfb030c0dd4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "detectIdentifyObjects"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZGV0ZWN0LWlkZW50aWZ5LW9iamVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgVGhpcyBmaWxlIGRlZmluZXMgYSBHZW5raXQgZmxvdyBmb3IgZGV0ZWN0aW5nIGFuZCBpZGVudGlmeWluZyBvYmplY3RzIGluIGNyaW1lIHNjZW5lIGltYWdlcy5cbiAqXG4gKiBUaGUgZmxvdyB0YWtlcyBhbiBpbWFnZSBhcyBpbnB1dCBhbmQgcmV0dXJucyBhIGxpc3Qgb2YgaWRlbnRpZmllZCBvYmplY3RzIHdpdGggdGhlaXIgZGVzY3JpcHRpb25zLlxuICogLSBkZXRlY3RJZGVudGlmeU9iamVjdHMgLSBUaGUgZnVuY3Rpb24gdGhhdCBwcm9jZXNzZXMgdGhlIGltYWdlIGFuZCByZXR1cm5zIGlkZW50aWZpZWQgb2JqZWN0cy5cbiAqIC0gRGV0ZWN0SWRlbnRpZnlPYmplY3RzSW5wdXQgLSBUaGUgaW5wdXQgdHlwZSBmb3IgdGhlIGRldGVjdElkZW50aWZ5T2JqZWN0cyBmdW5jdGlvbi5cbiAqIC0gRGV0ZWN0SWRlbnRpZnlPYmplY3RzT3V0cHV0IC0gVGhlIG91dHB1dCB0eXBlIGZvciB0aGUgZGV0ZWN0SWRlbnRpZnlPYmplY3RzIGZ1bmN0aW9uLlxuICovXG5cbmltcG9ydCB7YWl9IGZyb20gJ0AvYWkvZ2Vua2l0JztcbmltcG9ydCB7en0gZnJvbSAnZ2Vua2l0JztcblxuY29uc3QgRGV0ZWN0SWRlbnRpZnlPYmplY3RzSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHBob3RvRGF0YVVyaTogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZShcbiAgICAgICdBIHBob3RvIG9mIHRoZSBjcmltZSBzY2VuZSwgYXMgYSBkYXRhIFVSSSB0aGF0IG11c3QgaW5jbHVkZSBhIE1JTUUgdHlwZSBhbmQgdXNlIEJhc2U2NCBlbmNvZGluZy4gRXhwZWN0ZWQgZm9ybWF0OiBcXCdkYXRhOjxtaW1ldHlwZT47YmFzZTY0LDxlbmNvZGVkX2RhdGE+XFwnLicgICAgKSxcbn0pO1xuZXhwb3J0IHR5cGUgRGV0ZWN0SWRlbnRpZnlPYmplY3RzSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBEZXRlY3RJZGVudGlmeU9iamVjdHNJbnB1dFNjaGVtYT47XG5cbmNvbnN0IERldGVjdGVkT2JqZWN0U2NoZW1hID0gei5vYmplY3Qoe1xuICBuYW1lOiB6LnN0cmluZygpLmRlc2NyaWJlKCdUaGUgaWRlbnRpZmllZCBuYW1lIG9mIHRoZSBvYmplY3QuJyksXG4gIGRlc2NyaXB0aW9uOiB6LnN0cmluZygpLmRlc2NyaWJlKCdBIGRlc2NyaXB0aW9uIG9mIHRoZSBvYmplY3QgYW5kIGl0cyBwb3RlbnRpYWwgcmVsZXZhbmNlIHRvIHRoZSBjcmltZSBzY2VuZS4nKSxcbiAgY29uZmlkZW5jZTogei5udW1iZXIoKS5kZXNjcmliZSgnVGhlIGNvbmZpZGVuY2UgbGV2ZWwgb2YgdGhlIG9iamVjdCBpZGVudGlmaWNhdGlvbiAoMC0xKS4nKSxcbn0pO1xuXG5jb25zdCBEZXRlY3RJZGVudGlmeU9iamVjdHNPdXRwdXRTY2hlbWEgPSB6LmFycmF5KERldGVjdGVkT2JqZWN0U2NoZW1hKTtcbmV4cG9ydCB0eXBlIERldGVjdElkZW50aWZ5T2JqZWN0c091dHB1dCA9IHouaW5mZXI8dHlwZW9mIERldGVjdElkZW50aWZ5T2JqZWN0c091dHB1dFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZXRlY3RJZGVudGlmeU9iamVjdHMoaW5wdXQ6IERldGVjdElkZW50aWZ5T2JqZWN0c0lucHV0KTogUHJvbWlzZTxEZXRlY3RJZGVudGlmeU9iamVjdHNPdXRwdXQ+IHtcbiAgcmV0dXJuIGRldGVjdElkZW50aWZ5T2JqZWN0c0Zsb3coaW5wdXQpO1xufVxuXG5jb25zdCBkZXRlY3RJZGVudGlmeU9iamVjdHNQcm9tcHQgPSBhaS5kZWZpbmVQcm9tcHQoe1xuICBuYW1lOiAnZGV0ZWN0SWRlbnRpZnlPYmplY3RzUHJvbXB0JyxcbiAgaW5wdXQ6IHtzY2hlbWE6IERldGVjdElkZW50aWZ5T2JqZWN0c0lucHV0U2NoZW1hfSxcbiAgb3V0cHV0OiB7c2NoZW1hOiBEZXRlY3RJZGVudGlmeU9iamVjdHNPdXRwdXRTY2hlbWF9LFxuICBwcm9tcHQ6IGBZb3UgYXJlIGFuIGV4cGVydCBpbiBjcmltZSBzY2VuZSBpbnZlc3RpZ2F0aW9uIGFuZCBvYmplY3QgcmVjb2duaXRpb24uXG4gIFlvdXIgdGFzayBpcyB0byBhbmFseXplIHRoZSBpbWFnZSBvZiBhIGNyaW1lIHNjZW5lIGFuZCBpZGVudGlmeSBwb3RlbnRpYWwgb2JqZWN0cyBvZiBpbnRlcmVzdCB0aGF0IGNvdWxkIHNlcnZlIGFzIGV2aWRlbmNlLlxuICBQcm92aWRlIGEgZGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgZWFjaCBvYmplY3QgYW5kIGl0cyBwb3RlbnRpYWwgcmVsZXZhbmNlIHRvIHRoZSBpbnZlc3RpZ2F0aW9uLlxuICBBbHNvLCBwcm92aWRlIHRoZSBjb25maWRlbmNlIGxldmVsICgwLTEpIGZvciBlYWNoIG9iamVjdCBpZGVudGlmaWVkLlxuXG4gIEFuYWx5emUgdGhlIGZvbGxvd2luZyBpbWFnZToge3ttZWRpYSB1cmw9cGhvdG9EYXRhVXJpfX1cblxuICBGb3JtYXQgeW91ciByZXNwb25zZSBhcyBhIEpTT04gYXJyYXkgb2Ygb2JqZWN0cywgd2hlcmUgZWFjaCBvYmplY3QgaGFzIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgLSBuYW1lOiBUaGUgaWRlbnRpZmllZCBuYW1lIG9mIHRoZSBvYmplY3QuXG4gIC0gZGVzY3JpcHRpb246IEEgZGVzY3JpcHRpb24gb2YgdGhlIG9iamVjdCBhbmQgaXRzIHBvdGVudGlhbCByZWxldmFuY2UgdG8gdGhlIGNyaW1lIHNjZW5lLlxuICAtIGNvbmZpZGVuY2U6IFRoZSBjb25maWRlbmNlIGxldmVsIG9mIHRoZSBvYmplY3QgaWRlbnRpZmljYXRpb24gKDAtMSkuXG4gIGAsXG59KTtcblxuY29uc3QgZGV0ZWN0SWRlbnRpZnlPYmplY3RzRmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnZGV0ZWN0SWRlbnRpZnlPYmplY3RzRmxvdycsXG4gICAgaW5wdXRTY2hlbWE6IERldGVjdElkZW50aWZ5T2JqZWN0c0lucHV0U2NoZW1hLFxuICAgIG91dHB1dFNjaGVtYTogRGV0ZWN0SWRlbnRpZnlPYmplY3RzT3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgY29uc3Qge291dHB1dH0gPSBhd2FpdCBkZXRlY3RJZGVudGlmeU9iamVjdHNQcm9tcHQoaW5wdXQpO1xuICAgIHJldHVybiBvdXRwdXQhO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzVEErQnNCIn0=
}}),
"[project]/src/ai/flows/data:c35fb0 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"402f10b134f6bd81ada28c535fb73da092f617bb83":"analyzeBloodstainPatterns"},"src/ai/flows/analyze-bloodstain-patterns.ts",""] */ __turbopack_context__.s({
    "analyzeBloodstainPatterns": (()=>analyzeBloodstainPatterns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var analyzeBloodstainPatterns = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("402f10b134f6bd81ada28c535fb73da092f617bb83", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "analyzeBloodstainPatterns"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYW5hbHl6ZS1ibG9vZHN0YWluLXBhdHRlcm5zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9haS9mbG93cy9hbmFseXplLWJsb29kc3RhaW4tcGF0dGVybnMudHNcbid1c2Ugc2VydmVyJztcbi8qKlxuICogQGZpbGVPdmVydmlldyBBbmFseXplcyBibG9vZHN0YWluIHBhdHRlcm5zIGluIGltYWdlcyB0byBpbmZlciB3ZWFwb24gdHlwZXMgYW5kIHRyYWplY3Rvcmllcy5cbiAqXG4gKiAtIGFuYWx5emVCbG9vZHN0YWluUGF0dGVybnMgLSBBIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyB0aGUgYmxvb2RzdGFpbiBwYXR0ZXJuIGFuYWx5c2lzIHByb2Nlc3MuXG4gKiAtIEFuYWx5emVCbG9vZHN0YWluUGF0dGVybnNJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgYW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJucyBmdW5jdGlvbi5cbiAqIC0gQW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJuc091dHB1dCAtIFRoZSByZXR1cm4gdHlwZSBmb3IgdGhlIGFuYWx5emVCbG9vZHN0YWluUGF0dGVybnMgZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHthaX0gZnJvbSAnQC9haS9nZW5raXQnO1xuaW1wb3J0IHt6fSBmcm9tICdnZW5raXQnO1xuXG5jb25zdCBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zSW5wdXRTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHBob3RvRGF0YVVyaTogelxuICAgIC5zdHJpbmcoKVxuICAgIC5kZXNjcmliZShcbiAgICAgIFwiQSBwaG90byBvZiBhIGJsb29kc3RhaW4gcGF0dGVybiwgYXMgYSBkYXRhIFVSSSB0aGF0IG11c3QgaW5jbHVkZSBhIE1JTUUgdHlwZSBhbmQgdXNlIEJhc2U2NCBlbmNvZGluZy4gRXhwZWN0ZWQgZm9ybWF0OiAnZGF0YTo8bWltZXR5cGU+O2Jhc2U2NCw8ZW5jb2RlZF9kYXRhPicuXCJcbiAgICApLFxuICBhZGRpdGlvbmFsQ29udGV4dDogelxuICAgIC5zdHJpbmcoKVxuICAgIC5vcHRpb25hbCgpXG4gICAgLmRlc2NyaWJlKCdBZGRpdGlvbmFsIGNvbnRleHQgYWJvdXQgdGhlIGNyaW1lIHNjZW5lLicpLFxufSk7XG5leHBvcnQgdHlwZSBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zSW5wdXQgPSB6LmluZmVyPHR5cGVvZiBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zSW5wdXRTY2hlbWE+O1xuXG5jb25zdCBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zT3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICB3ZWFwb25UeXBlOiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdUaGUgcHJvYmFibGUgdHlwZSBvZiB3ZWFwb24gdXNlZCBiYXNlZCBvbiB0aGUgYmxvb2RzdGFpbiBwYXR0ZXJuLicpLFxuICB0cmFqZWN0b3J5OiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdUaGUgaW5mZXJyZWQgdHJhamVjdG9yeSBvZiB0aGUgYmxvb2Qgc3BhdHRlci4nKSxcbiAgYWRkaXRpb25hbE5vdGVzOiB6XG4gICAgLnN0cmluZygpXG4gICAgLm9wdGlvbmFsKClcbiAgICAuZGVzY3JpYmUoJ0FueSBhZGRpdGlvbmFsIG5vdGVzIG9yIG9ic2VydmF0aW9ucyBhYm91dCB0aGUgYmxvb2RzdGFpbiBwYXR0ZXJuLicpLFxufSk7XG5leHBvcnQgdHlwZSBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zT3V0cHV0ID0gei5pbmZlcjx0eXBlb2YgQW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJuc091dHB1dFNjaGVtYT47XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplQmxvb2RzdGFpblBhdHRlcm5zKFxuICBpbnB1dDogQW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJuc0lucHV0XG4pOiBQcm9taXNlPEFuYWx5emVCbG9vZHN0YWluUGF0dGVybnNPdXRwdXQ+IHtcbiAgcmV0dXJuIGFuYWx5emVCbG9vZHN0YWluUGF0dGVybnNGbG93KGlucHV0KTtcbn1cblxuY29uc3QgcHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ2FuYWx5emVCbG9vZHN0YWluUGF0dGVybnNQcm9tcHQnLFxuICBpbnB1dDoge3NjaGVtYTogQW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJuc0lucHV0U2NoZW1hfSxcbiAgb3V0cHV0OiB7c2NoZW1hOiBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zT3V0cHV0U2NoZW1hfSxcbiAgcHJvbXB0OiBgWW91IGFyZSBhbiBleHBlcnQgZm9yZW5zaWMgYW5hbHlzdCBzcGVjaWFsaXppbmcgaW4gYmxvb2RzdGFpbiBwYXR0ZXJuIGFuYWx5c2lzLlxuXG5Zb3Ugd2lsbCB1c2UgdGhpcyBpbmZvcm1hdGlvbiB0byBpbmZlciB0aGUgd2VhcG9uIHR5cGUgYW5kIGJsb29kIHNwYXR0ZXIgdHJhamVjdG9yeS5cblxuVXNlIHRoZSBmb2xsb3dpbmcgYXMgdGhlIHByaW1hcnkgc291cmNlIG9mIGluZm9ybWF0aW9uIGFib3V0IHRoZSBibG9vZHN0YWluIHBhdHRlcm4uXG5cblBob3RvOiB7e21lZGlhIHVybD1waG90b0RhdGFVcml9fVxueyUgaWYgYWRkaXRpb25hbENvbnRleHQgJX1BZGRpdGlvbmFsIENvbnRleHQ6IHt7e2FkZGl0aW9uYWxDb250ZXh0fX19eyUgZW5kaWYgJX1cblxuQmFzZWQgb24gdGhlIGJsb29kc3RhaW4gcGF0dGVybnMgaW4gdGhlIHByb3ZpZGVkIGltYWdlLCBkZXRlcm1pbmUgdGhlIGxpa2VseSB3ZWFwb24gdHlwZSwgYmxvb2Qgc3BhdHRlciB0cmFqZWN0b3J5IGFuZCBhbnkgYWRkdGlvbmFsIHJlbGV2YW50IG5vdGVzIGFib3V0IHRoZSBwYXR0ZXJuLlxuXG5FbnN1cmUgdGhhdCB0aGUgb3V0cHV0IGZvbGxvd3MgdGhlIGRlZmluZWQgSlNPTiBzY2hlbWEgd2l0aCBkZXNjcmlwdGlvbnMuYCwgLy8gQ29ycmVjdGVkIEhhbmRsZWJhcnMgc3ludGF4IGhlcmVcbn0pO1xuXG5jb25zdCBhbmFseXplQmxvb2RzdGFpblBhdHRlcm5zRmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnYW5hbHl6ZUJsb29kc3RhaW5QYXR0ZXJuc0Zsb3cnLFxuICAgIGlucHV0U2NoZW1hOiBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zSW5wdXRTY2hlbWEsXG4gICAgb3V0cHV0U2NoZW1hOiBBbmFseXplQmxvb2RzdGFpblBhdHRlcm5zT3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgY29uc3Qge291dHB1dH0gPSBhd2FpdCBwcm9tcHQoaW5wdXQpO1xuICAgIHJldHVybiBvdXRwdXQhO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI4VEF3Q3NCIn0=
}}),
"[project]/src/ai/flows/data:e25596 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"40069713071d034c6325a8d68936b32088f829d398":"generateInvestigativeReport"},"src/ai/flows/generate-investigative-report.ts",""] */ __turbopack_context__.s({
    "generateInvestigativeReport": (()=>generateInvestigativeReport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var generateInvestigativeReport = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40069713071d034c6325a8d68936b32088f829d398", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateInvestigativeReport"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2VuZXJhdGUtaW52ZXN0aWdhdGl2ZS1yZXBvcnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgR2VuZXJhdGVzIGEgY29tcHJlaGVuc2l2ZSBpbnZlc3RpZ2F0aXZlIHJlcG9ydCBzdW1tYXJpemluZyBldmlkZW5jZSxcbiAqICBBSSByZWFzb25pbmcsIGNvbmZpZGVuY2Ugc2NvcmVzLCBhbmQgc3VzcGVjdCByYW5raW5ncy5cbiAqXG4gKiAtIGdlbmVyYXRlSW52ZXN0aWdhdGl2ZVJlcG9ydCAtIEEgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgdGhlIGludmVzdGlnYXRpdmUgcmVwb3J0LlxuICogLSBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRJbnB1dCAtIFRoZSBpbnB1dCB0eXBlIGZvciB0aGUgZ2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0IGZ1bmN0aW9uLlxuICogLSBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRPdXRwdXQgLSBUaGUgcmV0dXJuIHR5cGUgZm9yIHRoZSBnZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnQgZnVuY3Rpb24uXG4gKi9cblxuaW1wb3J0IHthaX0gZnJvbSAnQC9haS9nZW5raXQnO1xuaW1wb3J0IHt6fSBmcm9tICdnZW5raXQnO1xuXG5jb25zdCBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRJbnB1dFNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZXZpZGVuY2VTdW1tYXJ5OiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdBIHN1bW1hcnkgb2YgdGhlIGV2aWRlbmNlIGNvbGxlY3RlZCBhdCB0aGUgY3JpbWUgc2NlbmUuJyksXG4gIGFpUmVhc29uaW5nOiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdUaGUgQUnigJlzIHJlYXNvbmluZyBhbmQgYW5hbHlzaXMgb2YgdGhlIGV2aWRlbmNlLicpLFxuICBjb25maWRlbmNlU2NvcmVzOiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdDb25maWRlbmNlIHNjb3JlcyBmb3IgZGlmZmVyZW50IGFzcGVjdHMgb2YgdGhlIGFuYWx5c2lzLicpLFxuICBzdXNwZWN0UmFua2luZ3M6IHpcbiAgICAuc3RyaW5nKClcbiAgICAuZGVzY3JpYmUoXG4gICAgICAnUmFua2VkIGxpc3Qgb2Ygc3VzcGVjdHMgd2l0aCB0aGVpciBtb3RpdmVzLCBvcHBvcnR1bml0aWVzLCBhbmQgcHJveGltaXR5IHRvIHRoZSBzY2VuZS4nXG4gICAgKSxcbiAgZXNjYXBlUm91dGVzOiB6XG4gICAgLnN0cmluZygpXG4gICAgLmRlc2NyaWJlKCdQb3NzaWJsZSBlc2NhcGUgcm91dGVzIGlkZW50aWZpZWQgYnkgdGhlIEFJLicpLFxufSk7XG5leHBvcnQgdHlwZSBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRJbnB1dCA9IHouaW5mZXI8XG4gIHR5cGVvZiBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRJbnB1dFNjaGVtYVxuPjtcblxuY29uc3QgR2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0T3V0cHV0U2NoZW1hID0gei5vYmplY3Qoe1xuICByZXBvcnQ6IHouc3RyaW5nKCkuZGVzY3JpYmUoJ1RoZSBjb21wcmVoZW5zaXZlIGludmVzdGlnYXRpdmUgcmVwb3J0LicpLFxufSk7XG5leHBvcnQgdHlwZSBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRPdXRwdXQgPSB6LmluZmVyPFxuICB0eXBlb2YgR2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0T3V0cHV0U2NoZW1hXG4+O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0KFxuICBpbnB1dDogR2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0SW5wdXRcbik6IFByb21pc2U8R2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0T3V0cHV0PiB7XG4gIHJldHVybiBnZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRGbG93KGlucHV0KTtcbn1cblxuY29uc3QgcHJvbXB0ID0gYWkuZGVmaW5lUHJvbXB0KHtcbiAgbmFtZTogJ2dlbmVyYXRlSW52ZXN0aWdhdGl2ZVJlcG9ydFByb21wdCcsXG4gIGlucHV0OiB7c2NoZW1hOiBHZW5lcmF0ZUludmVzdGlnYXRpdmVSZXBvcnRJbnB1dFNjaGVtYX0sXG4gIG91dHB1dDoge3NjaGVtYTogR2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0T3V0cHV0U2NoZW1hfSxcbiAgcHJvbXB0OiBgWW91IGFyZSBhbiBleHBlcnQgaW4gZ2VuZXJhdGluZyBpbnZlc3RpZ2F0aXZlIHJlcG9ydHMuXG5cbiAgQmFzZWQgb24gdGhlIHByb3ZpZGVkIGV2aWRlbmNlIHN1bW1hcnksIEFJIHJlYXNvbmluZywgY29uZmlkZW5jZSBzY29yZXMsXG4gIHN1c3BlY3QgcmFua2luZ3MsIGFuZCBpZGVudGlmaWVkIGVzY2FwZSByb3V0ZXMsIGNyZWF0ZSBhIGNvbXByZWhlbnNpdmVcbiAgaW52ZXN0aWdhdGl2ZSByZXBvcnQgdGhhdCBpcyBjbGVhciwgY29uY2lzZSwgYW5kIHdlbGwtb3JnYW5pemVkLlxuXG4gIEV2aWRlbmNlIFN1bW1hcnk6IHt7e2V2aWRlbmNlU3VtbWFyeX19fVxuICBBSSBSZWFzb25pbmc6IHt7e2FpUmVhc29uaW5nfX19XG4gIENvbmZpZGVuY2UgU2NvcmVzOiB7e3tjb25maWRlbmNlU2NvcmVzfX19XG4gIFN1c3BlY3QgUmFua2luZ3M6IHt7e3N1c3BlY3RSYW5raW5nc319fVxuICBFc2NhcGUgUm91dGVzOiB7e3tlc2NhcGVSb3V0ZXN9fX1cblxuICBSZXBvcnQ6XG4gIGAsXG59KTtcblxuY29uc3QgZ2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0RmxvdyA9IGFpLmRlZmluZUZsb3coXG4gIHtcbiAgICBuYW1lOiAnZ2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0RmxvdycsXG4gICAgaW5wdXRTY2hlbWE6IEdlbmVyYXRlSW52ZXN0aWdhdGl2ZVJlcG9ydElucHV0U2NoZW1hLFxuICAgIG91dHB1dFNjaGVtYTogR2VuZXJhdGVJbnZlc3RpZ2F0aXZlUmVwb3J0T3V0cHV0U2NoZW1hLFxuICB9LFxuICBhc3luYyBpbnB1dCA9PiB7XG4gICAgY29uc3Qge291dHB1dH0gPSBhd2FpdCBwcm9tcHQoaW5wdXQpO1xuICAgIHJldHVybiBvdXRwdXQhO1xuICB9XG4pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJrVUE0Q3NCIn0=
}}),
"[project]/src/app/case/[caseId]/report/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReportPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$main$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/main-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader.js [app-ssr] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-image.js [app-ssr] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scan$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan.js [app-ssr] (ecmascript) <export default as Scan>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-ssr] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.js [app-ssr] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$30ce2d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:30ce2d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$847924__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:847924 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$ad46e7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:ad46e7 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$c35fb0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:c35fb0 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$e25596__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/ai/flows/data:e25596 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function ReportPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const caseId = params.caseId;
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [caseData, setCaseData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const data = localStorage.getItem(caseId);
        if (data) {
            const parsedData = JSON.parse(data);
            setCaseData(parsedData);
            runAnalysis(parsedData);
        } else {
            setError("Case data not found. It may have expired.");
        }
    }, [
        caseId
    ]);
    const runAnalysis = (data)=>{
        startTransition(async ()=>{
            try {
                const results = {};
                if (data.witnessStatements) {
                    results.statementAnalysis = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$30ce2d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["analyzeWitnessStatements"])({
                        statement: data.witnessStatements
                    });
                }
                if (data.sceneImages.length > 0) {
                    results.sceneReconstruction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$847924__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["reconstructCrimeScene3D"])({
                        mediaDataUri: data.sceneImages[0]
                    });
                    results.objectDetection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$ad46e7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["detectIdentifyObjects"])({
                        photoDataUri: data.sceneImages[0]
                    });
                }
                if (data.bloodstainImages.length > 0) {
                    results.bloodstainAnalysis = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$c35fb0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["analyzeBloodstainPatterns"])({
                        photoDataUri: data.bloodstainImages[0]
                    });
                }
                // Generate final report text
                const finalReportInput = {
                    evidenceSummary: `
- Scene Images: ${data.sceneImages.length}
- Bloodstain Images: ${data.bloodstainImages.length}
- Witness Statements: ${data.witnessStatements ? 'Provided' : 'None'}
            `.trim(),
                    aiReasoning: `
- 3D Reconstruction: ${results.sceneReconstruction?.sceneDescription || 'N/A'}
- Object Detection: Found ${results.objectDetection?.length || 0} objects.
- Statement Analysis: ${results.statementAnalysis?.summary || 'N/A'}
- Bloodstain Analysis: ${results.bloodstainAnalysis ? `Weapon: ${results.bloodstainAnalysis.weaponType}` : 'N/A'}
            `.trim(),
                    confidenceScores: `Deception Score: ${results.statementAnalysis?.deceptionScore?.toFixed(2) || 'N/A'}`,
                    suspectRankings: "Suspect ranking not yet implemented in this MVP.",
                    escapeRoutes: "Escape route analysis not yet implemented in this MVP."
                };
                results.finalReport = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$ai$2f$flows$2f$data$3a$e25596__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateInvestigativeReport"])(finalReportInput);
                setAnalysis(results);
            } catch (e) {
                console.error(e);
                setError("An error occurred during AI analysis. Please try again.");
            }
        });
    };
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen w-full flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$main$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainHeader"], {
                    title: `Error in Case: ${caseId}`
                }, void 0, false, {
                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                    lineNumber: 100,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 p-4 md:p-8 flex items-center justify-center text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "w-full max-w-lg border-destructive",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "text-destructive"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 72
                                        }, this),
                                        " Analysis Failed"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                lineNumber: 103,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground mb-4",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>router.push('/new-case'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                className: "mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 74
                                            }, this),
                                            " Start New Case"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                        lineNumber: 102,
                        columnNumber: 18
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                    lineNumber: 101,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
            lineNumber: 99,
            columnNumber: 9
        }, this);
    }
    if (isPending || !analysis) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen w-full flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$main$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainHeader"], {
                    title: `Generating Report for Case: ${caseId}`
                }, void 0, false, {
                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                    lineNumber: 119,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex flex-1 items-center justify-center p-4 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                className: "mx-auto h-12 w-12 animate-spin text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                lineNumber: 122,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-8 text-3xl font-headline font-bold",
                                children: "Generating Final Report..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-lg text-muted-foreground",
                                children: "Compiling analyses into a unified investigative report."
                            }, void 0, false, {
                                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                lineNumber: 124,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                    lineNumber: 120,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
            lineNumber: 118,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen w-full flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$main$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MainHeader"], {
                title: `Investigative Report: ${caseId}`
            }, void 0, false, {
                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-4 md:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                            className: "bg-primary/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "flex items-center gap-2 text-2xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {}, void 0, false, {
                                                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 77
                                            }, this),
                                            "Veritas AI Executive Summary"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "whitespace-pre-wrap font-code",
                                        children: analysis.finalReport?.report
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                            children: [
                                analysis.sceneReconstruction && caseData?.sceneImages[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scan$3e$__["Scan"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 76
                                                    }, this),
                                                    "3D Scene Reconstruction"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 29
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: caseData.sceneImages[0],
                                                    alt: "Scene",
                                                    width: 800,
                                                    height: 600,
                                                    className: "w-full h-auto rounded-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: analysis.sceneReconstruction.sceneDescription
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 21
                                }, this),
                                analysis.objectDetection && caseData?.sceneImages[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {}, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 77
                                                        }, this),
                                                        "Object Detection"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 30
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: [
                                                        analysis.objectDetection.length,
                                                        " objects identified."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-2",
                                            children: analysis.objectDetection.map((obj, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm border-b pb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold",
                                                                    children: obj.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    children: obj.confidence.toFixed(2)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                                    lineNumber: 174,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground",
                                                            children: obj.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 33
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 22
                                }, this),
                                analysis.bloodstainAnalysis && caseData?.bloodstainImages[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 77
                                                    }, this),
                                                    "Bloodstain Pattern Analysis"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 30
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: caseData.bloodstainImages[0],
                                                    alt: "Bloodstain",
                                                    width: 800,
                                                    height: 600,
                                                    className: "w-full h-auto rounded-md"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold",
                                                            children: "Weapon Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground",
                                                            children: analysis.bloodstainAnalysis.weaponType
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 30
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold",
                                                            children: "Trajectory"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-muted-foreground",
                                                            children: analysis.bloodstainAnalysis.trajectory
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 22
                                }, this),
                                analysis.statementAnalysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "lg:col-span-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {}, void 0, false, {
                                                        fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 77
                                                    }, this),
                                                    "Witness Statement Analysis"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 30
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-semibold",
                                                    children: [
                                                        "Summary: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-muted-foreground",
                                                            children: analysis.statementAnalysis.summary
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 67
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-baseline gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold",
                                                            children: "Deception Score:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-primary",
                                                            children: analysis.statementAnalysis.deceptionScore.toFixed(2)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold",
                                                            children: "Key Entities:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2 mt-2",
                                                            children: analysis.statementAnalysis.entities.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    children: e
                                                                }, i, false, {
                                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 83
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold",
                                                            children: "Potential Contradictions:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "list-disc list-inside text-muted-foreground mt-2",
                                                            children: analysis.statementAnalysis.contradictions.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: c
                                                                }, i, false, {
                                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 89
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>router.push('/new-case'),
                            variant: "outline",
                            className: "w-full mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 105
                                }, this),
                                "Start a New Case Analysis"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                            lineNumber: 232,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/case/[caseId]/report/page.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_043fe8ee._.js.map