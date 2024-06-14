import Link from 'next/link';
import styles from '@/app/news/page.module.css';
import Header from '@/components/Header';
import Image from "next/image";

const NewsPage = () => {
    return (
        <div className={styles.container}>
            <Link href="/"><Header /></Link>
            <h5 className={styles.title}><span style={{ color: 'rgb(var(--accent-color-rgb))' }}>ey|</span>взгляд</h5>
            <h1 className={styles.sensation}>Свежие выпуски: прямо из редакции</h1>
            <div className={styles.box}>
                <Link href="/news/p" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/sample1.jpg"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Показы</h3>
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.meta}>
                                <Image
                                    src="/watch.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>15-20 минут</p>
                                <span style={{ margin: '0 20px' }}>|</span>
                                <Image
                                    src="/Blank-Avatar.png"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>Antonio Banderas</p>

                            </div>
                            <h3>Неделя моды в Париже 2024</h3>
                            <p>Самая насыщенная и самая богатая на именитые бренды неделя моды — парижская. Она поставила жирную точку и подтвердила все тренды, которые мы обозначили до неё. Мы полюбим бахрому, начнём присматриваться ко всевозможным трусам и купим парочку прозрачных вещей. Дословно повторять необязательно, но направление мысли уже ясно. Кстати, парижская неделя сопровождалась парочкой прощальных эмоциональных коллекций. Ну обо всем по порядку.</p>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/sunglasses.png"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Лайфхаки</h3>
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.meta}>
                                <Image
                                    src="/watch.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>15-20 минут</p>
                                <span style={{ margin: '0 20px' }}>|</span>
                                <Image
                                    src="/Blank-Avatar.png"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>Antonio Banderas</p>

                            </div>
                            <h3>Гайд по выбору очков на лето</h3>
                            <p>Очки состоят из двух принципиальных частей: линз и оправы. Линзы преломляют свет от внешнего мира, чтобы в него было не так больно смотреть. Оправа держит линзы недалеко от глаз, потому что держать линзы руками неудобно. Очки состоят из двух принципиальных частей: линз и оправы. Линзы преломляют свет от внешнего мира, чтобы в него было не так больно смотреть. Оправа держит линзы недалеко от глаз, потому что держать линзы руками неудобно.</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={styles.box}>
                <Link href="/" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/sample1.jpg"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Показы</h3>
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.meta}>
                                <Image
                                    src="/watch.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>15-20 минут</p>
                                <span style={{ margin: '0 20px' }}>|</span>
                                <Image
                                    src="/Blank-Avatar.png"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>Antonio Banderas</p>

                            </div>
                            <h3>Неделя моды в Париже 2024</h3>
                            <p>Самая насыщенная и самая богатая на именитые бренды неделя моды — парижская. Она поставила жирную точку и подтвердила все тренды, которые мы обозначили до неё. Мы полюбим бахрому, начнём присматриваться ко всевозможным трусам и купим парочку прозрачных вещей. Дословно повторять необязательно, но направление мысли уже ясно. Кстати, парижская неделя сопровождалась парочкой прощальных эмоциональных коллекций. Ну обо всем по порядку.</p>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/sunglasses.png"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Лайфхаки</h3>
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.meta}>
                                <Image
                                    src="/watch.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>15-20 минут</p>
                                <span style={{ margin: '0 20px' }}>|</span>
                                <Image
                                    src="/Blank-Avatar.png"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>Antonio Banderas</p>

                            </div>
                            <h3>Гайд по выбору очков на лето</h3>
                            <p>Очки состоят из двух принципиальных частей: линз и оправы. Линзы преломляют свет от внешнего мира, чтобы в него было не так больно смотреть. Оправа держит линзы недалеко от глаз, потому что держать линзы руками неудобно. Очки состоят из двух принципиальных частей: линз и оправы. Линзы преломляют свет от внешнего мира, чтобы в него было не так больно смотреть. Оправа держит линзы недалеко от глаз, потому что держать линзы руками неудобно.</p>
                        </div>
                    </div>
                </Link>
            </div>

            <h1 className={styles.categoryTitle}><span style={{ color: 'rgb(var(--accent-color-rgb))' }}>|</span>показы</h1>

            <div className={styles.box}>
                <Link href="/" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/sample1.jpg"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Показы</h3>
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.meta}>
                                <Image
                                    src="/watch.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>15-20 минут</p>
                                <span style={{ margin: '0 20px' }}>|</span>
                                <Image
                                    src="/Blank-Avatar.png"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>Antonio Banderas</p>

                            </div>
                            <h3>Неделя моды в Париже 2024</h3>
                            <p>Самая насыщенная и самая богатая на именитые бренды неделя моды — парижская. Она поставила жирную точку и подтвердила все тренды, которые мы обозначили до неё. Мы полюбим бахрому, начнём присматриваться ко всевозможным трусам и купим парочку прозрачных вещей. Дословно повторять необязательно, но направление мысли уже ясно. Кстати, парижская неделя сопровождалась парочкой прощальных эмоциональных коллекций. Ну обо всем по порядку.</p>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/sample1.jpg"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Показы</h3>
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.meta}>
                                <Image
                                    src="/watch.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>15-20 минут</p>
                                <span style={{ margin: '0 20px' }}>|</span>
                                <Image
                                    src="/Blank-Avatar.png"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>Antonio Banderas</p>

                            </div>
                            <h3>Неделя моды в Париже 2024</h3>
                            <p>Самая насыщенная и самая богатая на именитые бренды неделя моды — парижская. Она поставила жирную точку и подтвердила все тренды, которые мы обозначили до неё. Мы полюбим бахрому, начнём присматриваться ко всевозможным трусам и купим парочку прозрачных вещей. Дословно повторять необязательно, но направление мысли уже ясно. Кстати, парижская неделя сопровождалась парочкой прощальных эмоциональных коллекций. Ну обо всем по порядку.</p>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/sunglasses.png"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Лайфхаки</h3>
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.meta}>
                                <Image
                                    src="/watch.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>15-20 минут</p>
                                <span style={{ margin: '0 20px' }}>|</span>
                                <Image
                                    src="/Blank-Avatar.png"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>Antonio Banderas</p>

                            </div>
                            <h3>Гайд по выбору очков на лето</h3>
                            <p>Очки состоят из двух принципиальных частей: линз и оправы. Линзы преломляют свет от внешнего мира, чтобы в него было не так больно смотреть. Оправа держит линзы недалеко от глаз, потому что держать линзы руками неудобно. Очки состоят из двух принципиальных частей: линз и оправы. Линзы преломляют свет от внешнего мира, чтобы в него было не так больно смотреть. Оправа держит линзы недалеко от глаз, потому что держать линзы руками неудобно.</p>
                        </div>
                    </div>
                </Link>
            </div>

            <h1 className={styles.categoryTitle}><span style={{ color: 'rgb(var(--accent-color-rgb))' }}>|</span>лайфхаки</h1>

            <div className={styles.box}>
                <Link href="/" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/sample1.jpg"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Показы</h3>
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.meta}>
                                <Image
                                    src="/watch.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>15-20 минут</p>
                                <span style={{ margin: '0 20px' }}>|</span>
                                <Image
                                    src="/Blank-Avatar.png"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>Antonio Banderas</p>

                            </div>
                            <h3>Неделя моды в Париже 2024</h3>
                            <p>Самая насыщенная и самая богатая на именитые бренды неделя моды — парижская. Она поставила жирную точку и подтвердила все тренды, которые мы обозначили до неё. Мы полюбим бахрому, начнём присматриваться ко всевозможным трусам и купим парочку прозрачных вещей. Дословно повторять необязательно, но направление мысли уже ясно. Кстати, парижская неделя сопровождалась парочкой прощальных эмоциональных коллекций. Ну обо всем по порядку.</p>
                        </div>
                    </div>
                </Link>
                <Link href="/" className={styles.link}>
                    <div className={styles.card}>
                        <Image
                            src="/sample1.jpg"
                            alt=""
                            className={styles.imageCard}
                            width={660}
                            height={250}
                            priority
                        />
                        <div className={styles.category}>
                            <h3>Показы</h3>
                        </div>

                        <div className={styles.cardText}>
                            <div className={styles.meta}>
                                <Image
                                    src="/watch.svg"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>15-20 минут</p>
                                <span style={{ margin: '0 20px' }}>|</span>
                                <Image
                                    src="/Blank-Avatar.png"
                                    alt=""
                                    className={styles.watch}
                                    width={20}
                                    height={20}
                                    priority
                                />
                                <p>Antonio Banderas</p>

                            </div>
                            <h3>Неделя моды в Париже 2024</h3>
                            <p>Самая насыщенная и самая богатая на именитые бренды неделя моды — парижская. Она поставила жирную точку и подтвердила все тренды, которые мы обозначили до неё. Мы полюбим бахрому, начнём присматриваться ко всевозможным трусам и купим парочку прозрачных вещей. Дословно повторять необязательно, но направление мысли уже ясно. Кстати, парижская неделя сопровождалась парочкой прощальных эмоциональных коллекций. Ну обо всем по порядку.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default NewsPage;
