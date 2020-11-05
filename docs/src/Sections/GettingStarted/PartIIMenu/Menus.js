export default (selectedItem) => {
    return [
        {
            label: "6. Restructuring",
            onClick: () =>selectedItem(6)
        },
        {
            label: "7. Creating reducers",
            onClick: () => selectedItem(7)
        },
        {
            label: "8. Refactoring",
            onClick: () => selectedItem(8)
        },
        {
            label: "9. Connecting reducers",
            onClick: () => selectedItem(9)
        },
        {
            label: "10. Deployment",
            onClick: () => selectedItem(10)
        },
    ]
}