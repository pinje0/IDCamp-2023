import React from 'react';
import { createRoot } from 'react-dom/client';

// component
// memanggil properti menggunakan { } (kurung kurawal)
function Button({ link }) {
    return <a href={link}>Find out more</a>;
}

// component
// memanggil properti menggunakan { } (kurung kurawal)
function CardHeader({ category, image }) {
    return (
        <header>
            <h4>{category}</h4>
            <img src={image} alt="" />
        </header>
    );
}

// component
// memanggil properti menggunakan { } (kurung kurawal)
function CardBody({ date, title, content, link }) {
    return (
        <div>
            <p>{date}</p>
            <h2>{title}</h2>
            <p>{content}</p>
            <Button link={link} />
        </div>
    );
}

function Card({ image, category, date, title, content, link }) {
    return (
        <article>
            {/* composition = menggabungkan component */}
            {/* harus menyediakan seluruh data yang dibutuhkan melalui properti (dari composition component) */}
            <CardHeader image={image} category={category} />
            <CardBody date={date} title={title} content={content} link={link} />
        </article>
    );
}

function Header({ title, subtitle }) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
}

// parent component
function News() {
    // data news
    const someNews = [
        // index 0
        {
            // properti (title,date,content,image,category,link)
            title: 'CNN Acuire BEME',
            date: 'March 20 2022',
            content: "CNN purchased Casey Neistat's Beme app for $25million",
            image: 'https://source.unsplash.com/user/erondu/600x400',
            category: 'News',
            link: '#',
        },
        // index 1
        {
            // properti (title,date,content,image,category,link)
            title: 'React and the WP-API',
            date: 'March 19 2022',
            content:
                'The first ever decoupled starter theme for React & the WP-API.',
            image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
            category: 'News',
            link: '#',
        },
        // index 2
        {
            // properti (title,date,content,image,category,link)
            title: 'Nomad Lifestyle',
            date: 'March 19 2022',
            content: 'Learn our tips and tricks on living a nomadic lifestyle.',
            image: 'https://source.unsplash.com/user/erondu/600x400',
            category: 'Travel',
            link: '#',
        },
    ];

    // selesaikan component-nya
    // menggabungkan seluruh component
    return (
        <div>
            <Header
                title="Latest News"
                subtitle="Covering March & April 2022"
            />
            <Card
                // menggambil value dari properties someNews dengan index (array []) dan ambil propertiesnya
                title={someNews[0].title}
                date={someNews[0].date}
                content={someNews[0].content}
                image={someNews[0].image}
                category={someNews[0].category}
                link={someNews[0].link}
            />

            {/* shorthand with spread operator */}
            {/* <Card {...someNews[0]} /> */}

            <Card
                title={someNews[1].title}
                date={someNews[1].date}
                content={someNews[1].content}
                image={someNews[1].image}
                category={someNews[1].category}
                link={someNews[1].link}
            />
            <Card
                title={someNews[2].title}
                date={someNews[2].date}
                content={someNews[2].content}
                image={someNews[2].image}
                category={someNews[2].category}
                link={someNews[2].link}
            />
        </div>
    );
}

// menampilkan parent component to browser
const root = createRoot(document.getElementById('root'));
root.render(<News />);
