export default (selectedItem) => {
    return [
        {
            label: "Card",
            onClick: () =>  selectedItem("Card")
        },
        {
            label: "Icon",
            onClick: () => selectedItem("Icon")
        }
    ]
}