// Animación de escritura tipo máquina de escribir
class TypeWriter {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.charIndex = 0;
    }

    async type() {
        return new Promise((resolve) => {
            // Hacer visible el elemento antes de escribir
            this.element.classList.add('typing');
            this.element.textContent = '';
            
            // Agregar cursor
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            cursor.textContent = '|';
            this.element.appendChild(cursor);
            
            const typeChar = () => {
                if (this.charIndex < this.text.length) {
                    // Insertar el carácter antes del cursor
                    const textNode = document.createTextNode(this.text.charAt(this.charIndex));
                    this.element.insertBefore(textNode, cursor);
                    this.charIndex++;
                    setTimeout(typeChar, this.speed);
                } else {
                    // Remover el cursor cuando termine
                    setTimeout(() => {
                        cursor.remove();
                        resolve();
                    }, 500);
                }
            };
            
            typeChar();
        });
    }
}

// Función para animar todos los elementos en secuencia
async function animateText() {
    // Esperar un poco antes de comenzar
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Título
    const title = document.getElementById('title');
    const titleText = title.textContent;
    const titleWriter = new TypeWriter(title, titleText, 80);
    await titleWriter.type();
    
    // Pausa más larga después del título
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Primer párrafo
    const p1 = document.getElementById('paragraph1');
    const p1Text = p1.textContent;
    const p1Writer = new TypeWriter(p1, p1Text, 30);
    await p1Writer.type();
    
    // Pausa entre párrafos
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Segundo párrafo
    const p2 = document.getElementById('paragraph2');
    const p2Text = p2.textContent;
    const p2Writer = new TypeWriter(p2, p2Text, 30);
    await p2Writer.type();
    
    // Pausa más larga antes de la cita final
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Cita final
    const quote = document.getElementById('quote');
    const quoteText = quote.textContent;
    const quoteWriter = new TypeWriter(quote, quoteText, 60);
    await quoteWriter.type();
}

// Iniciar la animación cuando la página cargue
// Comentado para que solo inicie después del welcome screen
// window.addEventListener('load', animateText);
