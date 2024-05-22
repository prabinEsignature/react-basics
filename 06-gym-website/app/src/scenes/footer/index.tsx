import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt = "logo" src = {Logo} />
                    <p className="my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eligendi harum. Sint odit officiis, expedita cupiditate enim repellendus quam corporis eaque consequatur nam alias atque, fuga ex vero qui iste.</p>
                    <p>&copy; Evogym All Rights Reserved. </p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-3">Massa orci senectus</p>
                    <p className="my-3">Et gravida id et etiam</p>
                    <p>Ullamcoper vivamus</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="my-3">Lorem ipsum dolor sit consectetur adipisicing elit.</p>
                    <p className="my-3">(333)4234-23487</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;