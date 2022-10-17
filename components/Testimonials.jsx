import styles from '../styles/slide.module.css';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Testimonials = () => {
    const products = ['testimonial1', 'testimonial2', 'testimonial3'];
    const itemTemplate = (item)=>{
        return (
            <div className={ 'min-h-screen flex flex-col justify-center items-center ' + item  }>
                    <div className="grid grid-cols-3 gap-x-8 px-4 py-8 bg-primary bg-opacity-80 max-w-3xl shadow-2xl">
                        <div className="col-span-1">
                            <img src={'/businessman.jpg'} className="h-52 w-52 rounded-full shadow-2xl border-secondary border-2" />
                        </div>
                        <div className="col-span-2">
                                <div className="text-3xl font-paytone">
                                    SHIVAM KUMAR
                                </div>
                                <div className="mt-1 text-base">
                                    Owner of NeoVison Marketing
                                </div>
                                <div className="text-3xl font-paytone mt-2 -ml-4 text-secondary">
                                    { '"' }
                                </div>
                                <div className="">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum ad assumenda laborum perspiciatis repellat eveniet vitae dignissimos, possimus praesentium iusto? Ipsa culpa quod saepe.
                                </div>
                                <div className="mt-3 ">
                                    <a href="#" className={styles.visit}> 
                                    <svg className="h-4 w-4 fill-white inline mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>

                                    Visit Site 
                                    </a>
                                </div>
                        </div>
                    </div>
            </div>  
        );
    }
    return (
        <div  className="root">

            <Carousel value={products} itemTemplate={itemTemplate}></Carousel>
        </div>
    );
}

export default Testimonials;