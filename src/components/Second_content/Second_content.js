import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Second-content.css";
import Star_rating from "../Star_Rating/Star_rating";

function Second_content() {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);

            const response = await axios.get("./data/Content.json");
            console.log(response);
            setPosts(response.data);
            setLoading(false);
        };
        loadPost();
    }, []);
    return (
        <div className="Container2">
            <img src="./img/Second-content-img1.png" />
            <img src="./img/Second-content-img2.png" />
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    {posts &&
                        posts.map((item) => (
                            <div className="Container2__content">
                                <Header img={item.title} />

                                <div className="Container2__content__text">
                                    <Left_content
                                        rate={item.star_rating}
                                        img={item.ad}
                                    />

                                    <Right_content
                                        img1={item.img1}
                                        text={item.text}
                                        img={item.graph}
                                    />
                                </div>

                                <Arrow text="公式サイトを見る" />

                                <List
                                    img="./img/First-content-mark.png"
                                    content={item.content}
                                />

                                <Message
                                    img="./img/Second-content-chatbox.png"
                                    text="クチコミを見てみる"
                                />

                                <Last_content img={item.img2} />

                                <Arrow text="キャンペーンの詳細を見る" />

                                <hr />
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}

const Header = ({ img }) => {
    return (
        <div>
            <div className="Container2__content__heading">
                <img src={img} />
                <hr />
            </div>
        </div>
    );
};

const Left_content = ({ rate, img }) => {
    return (
        <div>
            <div className="Container2__content__text--left">
                <Star_rating rating={rate} rate={rate} />
                <img src={img} />
            </div>
        </div>
    );
};

const Right_content = ({ img, text, img1 }) => (
    <div>
        <div className="Container2__content__text--right">
            <div className="Container2__content__text--right1">
                {img1 && <img src={img1} />}
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
            </div>

            <div className="Container2__content__text--right2">
                <img src={img} />
            </div>
        </div>
    </div>
);

const Arrow = ({ text }) => (
    <div>
        <div className="Container2__content__arrow">
            <p>{text}</p>
            <img src="./img/arrow-right.png" />
        </div>
    </div>
);

const List = ({ img, content }) => (
    <div>
        {content?.map((text) => {
            return (
                <div>
                    <ul className="Container2__content__list" type="none">
                        <li>
                            <img src={img} />
                            <span //use HTML in array
                                dangerouslySetInnerHTML={{ __html: text }}
                            ></span>
                        </li>
                    </ul>
                </div>
            );
        })}
    </div>
);

const Message = ({ img, text }) => (
    <div>
        <div className="Container2__content__message">
            <img src={img} />
            <span>{text}</span>
        </div>
    </div>
);

const Last_content = ({ text, img }) => (
    <div>
        <div className="Container2__content__last">
            <p>キャンペーン情報</p>
            {img && <img src={img} />}
        </div>
    </div>
);

export default Second_content;
