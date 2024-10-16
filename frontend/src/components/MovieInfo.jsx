import React from "react";

function MovieInfo(){
    return(
        
        <div className=" flex-grow w-[90%] mx-auto font-roboto">
            <h3 className="font-roboto font-bold text-4xl">SPIDERMAN : NO WAY HOME</h3>
            <p> Title: <b>Spider-Man: No Way Home </b> <br />
                Genre: Action, Adventure, Science Fiction <br />
                Duration:  2h 28min <br />
                Release Date: December 17, 2021 <br />
                Rating: PG-13 <br />
                Director: Jon Watts <br />
                Starring: Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Willem Dafoe, Jamie Foxx
            </p>
            <br />

            <p>
            <b>Synopsis: </b> <br />
            With Spider-Man’s identity now revealed, Peter Parker (Tom Holland) finds himself unable to separate his normal life from the high-stakes of being a superhero. When he turns to Doctor Strange (Benedict Cumberbatch) for help, the stakes become even more dangerous, forcing Peter to discover what it truly means to be Spider-Man.
            </p>
            <br />
            <p><b>Showtimes: </b> <br /> </p>
            <div className="flex flex-row gap-3 mb-24">
                <div className="shows">
                    <p className="mb-1">October 14, 2024 - 4:00 PM </p>
                    <p className="mb-1">October 14, 2024 - 7:00 PM </p>
                    <p className="mb-1">October 14, 2024 - 9:30 PM </p>
                </div>
                <div className="bookButtons flex flex-col w-[100px]">
                    <button className="button bg-[#1A2C50] text-yellow-400 rounded-lg mb-1 hover:bg-[#282764]">Book</button>
                    <button className="button bg-[#1A2C50] text-yellow-400 rounded-lg mb-1 hover:bg-[#282764]">Book</button>
                    <button className="button bg-[#1A2C50] text-yellow-400 rounded-lg mb-1 hover:bg-[#282764]">Book</button>
                    
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;