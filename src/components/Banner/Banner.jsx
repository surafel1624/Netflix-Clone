import React, { useEffect, useState } from 'react';
import styles from './Banner.module.css';
import axios from '../../services/axios';
import requests from '../../services/requests';

const Banner = () => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        (async () => {
            try {
                const request = await axios.get(requests.fetchNetflixOriginals);
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            }
            catch (error) {
                console.log("error", error);
            }
        })()
    }, []);
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }
  return (
    <div className={styles.banner} style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}>
        <div className={styles.contents}>
            <h1 className={styles.title}>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.play}`}>Play</button>
                <button className={styles.button}>My List</button>
            </div>
            <h1 className={styles.description}>{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className={styles.fadeBottom}></div>
    </div>
  )
}

export default Banner