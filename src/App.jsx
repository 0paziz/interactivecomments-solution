import React, { useState } from "react";
import "./App.css";
import Data from "./data/data.json";

export default function App() {
  return (
    <>
      <section className="bg-gray-100 h-fit p-10">
        {Data&& Data.comments.map((ele) => (
          <div className="max-w-4xl mx-auto">
            <div
              key={ele.id}
              id="comments"
              className="bg-white rounded p-4 flex gap-10 mb-8 shadow"
            >
              <div
                id="votes"
                className="bg-gray-50 w-20 flex items-center justify-around p-2 rounded-2xl flex-col"
              >
                <img className="w-1/2" src="/images/icon-plus.svg" alt="" />
                <p className="text-xl font-bold Moderate-blue">{ele.score}</p>
                <img className="w-1/2" src="/images/icon-minus.svg" alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <div
                  id="userinfo"
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center gap-4">
                    <img
                      className="w-10 h-10"
                      src={ele.user.image.webp}
                      alt={ele.user.username}
                    />
                    <h2 className="font-bold text-gray-700">
                      {ele.user.username}
                    </h2>
                    <p className="text-gray-500">{ele.createdAt}</p>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <img
                      className=""
                      src="/images/icon-reply.svg"
                      alt="icon reply"
                    />
                    <p className="Moderate-blue font-bold">Reply</p>
                  </div>
                </div>
                <div id="content">
                  <p className="text-gray-500">{ele.content}</p>
                </div>
              </div>
            </div>
            {ele&& ele.replies.map((reply) => (
              <div
                id="replies"
                key={reply.id}
                className="bg-white rounded p-4 flex gap-10 w-[90%] ml-22 shadow mb-8 "
              >
                <div
                  id="votes"
                  className="bg-gray-50 w-15 flex items-center justify-around p-2 rounded-2xl flex-col"
                >
                  <img className="w-4" src="/images/icon-plus.svg" alt="" />
                  <p className="text-xl font-bold Moderate-blue">
                    {reply.score}
                  </p>
                  <img className="w-4" src="/images/icon-minus.svg" alt="" />
                </div>
                <div className="flex flex-col gap-4">
                  <div
                    id="userinfo"
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="w-10 h-10"
                        src={reply.user.image.webp}
                        alt="amyrobson"
                      />
                      <h2 className="font-bold text-gray-700">
                        {reply.user.username}
                      </h2>
                    
                      {reply.user.username==Data.currentUser.username&&<p className="btnbg px-2 text-white font-semibold rounded">you</p>}
                   
                      <p className="text-gray-500">{reply.createdAt}</p>
                    </div>
                    <div className="flex items-center gap-1 ">

                     { reply.user.username==Data.currentUser.username?

                      <>
                      <button className="text-red-500">Delete</button>
                      <button>Edit</button>
                      </>
                     :
                     <>
                      <img
                        className="cursor-pointer"
                        src="/images/icon-reply.svg"
                        alt="icon reply"
                      />
                      <p className="Moderate-blue font-bold cursor-pointer">Reply</p>
                      </>
                     }

                    </div>

                  </div>
                  <div id="content">
                    <p className="text-gray-500 "><strong className="mr-1 Moderate-blue">@{reply.replyingTo}</strong>{reply.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="max-w-4xl mx-auto">
          <div
            id="comments"
            className="bg-white rounded p-4 flex gap-10 mb-8 shadow w-full"
          >
            <div className="p-2 w-full flex gap-x-5" >
              <img className="w-10 h-10 rounded-full" src={Data&& Data.currentUser.image.webp} alt="juliusomo"/>
              <form className=" flex   gap-x-4 w-full">
                <textarea className="p-4 border text-[16px] border-gray-200 outline-blue-200  w-full " placeholder="add comment" />
                   <button
                className="btnbg p-2 font-semibold text-white rounded cursor-pointer h-10 w-20" 
                type="submit"
                >SEND</button>
              </form>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
