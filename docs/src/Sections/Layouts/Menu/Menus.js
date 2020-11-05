export default (selectedItem) => {
    return [
        {
            label: "Row",
            onClick: () =>  selectedItem("Row")
        },
        {
            label: "Center",
            onClick: () => selectedItem("Center")
        }
    ]
}