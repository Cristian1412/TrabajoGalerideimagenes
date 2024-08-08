document.addEventListener('DOMContentLoaded', () => {
    const addImageButton = document.getElementById('add-image-button');
    const galleryContainer = document.getElementById('gallery-container');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const closeModal = document.getElementById('close-modal');

    addImageButton.addEventListener('click', () => {
        const imageUrl = document.getElementById('image-url').value;
        const imageTitle = document.getElementById('image-title').value;

        if (imageUrl && imageTitle) {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <img src="${imageUrl}" alt="${imageTitle}">
                <h3>${imageTitle}</h3>
                <button class="delete-button">Eliminar</button>
                <button class="details-button">Ver Detalles</button>
            `;

            galleryContainer.appendChild(galleryItem);
            addEventListeners(galleryItem);

            // Clear input fields
            document.getElementById('image-url').value = '';
            document.getElementById('image-title').value = '';
        }
    });

    function addEventListeners(item) {
        const deleteButton = item.querySelector('.delete-button');
        const detailsButton = item.querySelector('.details-button');

        deleteButton.addEventListener('click', () => {
            item.style.opacity = '0';
            setTimeout(() => item.remove(), 300);
        });

        detailsButton.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.querySelector('h3').textContent;

            modalImage.src = img.src;
            modalTitle.textContent = title;
            modal.classList.add('show');
        });
    }

    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
});
