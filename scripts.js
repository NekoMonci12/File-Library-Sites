// Sample file data with thumbnail URLs (you can replace this with your actual data)
const files = [
    { name: 'Document 1', url: 'files/document1.pdf', thumbnail: 'thumbnails/document1.png' },
    { name: 'Document 2', url: 'files/document2.pdf', thumbnail: 'thumbnails/document2.png' },
    { name: 'Document 3', url: 'files/document3.docx', thumbnail: 'thumbnails/document3.jpg' },
    // Add more files as needed
];

// Function to display files in the file list section
function displayFiles() {
    const fileListSection = document.getElementById('file-list');

    files.forEach(file => {
        const fileItem = document.createElement('div');
        const thumbnailLink = document.createElement('a');
        
        thumbnailLink.href = file.url; // Set the href attribute to the file URL
        thumbnailLink.target = '_blank'; // Open the link in a new tab/window
        thumbnailLink.className = 'thumbnail-link'; // Add the class for styling
        
        const thumbnailImage = document.createElement('img');
        thumbnailImage.src = file.thumbnail;
        thumbnailImage.alt = `${file.name} Thumbnail`;
        thumbnailImage.className = 'thumbnail';
        
        const fileName = document.createElement('p');
        fileName.textContent = file.name;

        thumbnailLink.appendChild(thumbnailImage);
        fileItem.appendChild(thumbnailLink);
        fileItem.appendChild(fileName);
        fileListSection.appendChild(fileItem);
    });
}

window.onload = displayFiles;