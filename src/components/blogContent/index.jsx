import './blog.css'
import BlogComponent from '../blogComponent'

function BlogContent() {
    return (
        <main className="contenedor">
            <h2 className="text-center">Nuestro Blog</h2>
            <BlogComponent />
        </main>
    )
}

export default BlogContent