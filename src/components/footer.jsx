function Footer() {
    return <footer className="page-footer red darken-4">
        <div className="footer-copyright">
            <div className="container">
            ©&nbsp;{new Date().getFullYear()} &nbsp;
            Developed by AlfeosMCQ
            <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer }