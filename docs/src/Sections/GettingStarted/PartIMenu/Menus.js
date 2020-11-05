export default (selectedItem) => {
    return [
        {
            label: "1. Installation",
            onClick: () => {
                selectedItem(1)
                console.log("Hollaaa")
            }
        },
        {
            label: "2. Folder structure",
            onClick: () => selectedItem(2)
        },
        {
            label: "3. Event Listeners",
            onClick: () => selectedItem(3)
        },
        {
            label: "4. UI Update",
            onClick: () => selectedItem(4)
        },
        {
            label: "5. Styling",
            onClick: () => selectedItem(5)
        },
    ]
}