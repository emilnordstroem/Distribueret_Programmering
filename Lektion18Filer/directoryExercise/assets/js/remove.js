const removeDirectoryButtons = document.querySelectorAll(".removeDirectoryButton")

removeDirectoryButtons.forEach(removeButton => {
    removeButton.addEventListener('click', () => {
        const fileToRemove = removeButton.dataset.file
        console.log('Remove button clicked:', fileToRemove)
    })
})
