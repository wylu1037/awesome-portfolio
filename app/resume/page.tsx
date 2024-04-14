import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex mx-auto items-center h-screen flex-col w-[600px] gap-6">
      <Image
        src="/meebits.png"
        alt=""
        width="192"
        height="192"
        className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-gray-200 shadow-xl self-start"
      />
      <h1 className="font-mono font-semibold text-4xl text-gray-700 self-start">
        后端工程师
      </h1>
      <div>
        简介
        <p>
          我是一名具有4年经验的后端开发工程师，参与了遥感反演、智慧停车、区块链等领域的应用系统开发，对服务端、微服务都有涉及。同时，我也是一名多语言的开发工程师，熟练掌握Golang、Java、Kotlin等语言，使用Spring
          Boot、Fiber框架进行快速开发，并能在项目早期进行难点攻坚(如项目搭建、加密算法、底层SDK封装等)，带领组员密切合作，以创建高效、可扩展的解决方案，解决软件开发的各种问题。
        </p>
        <p>联系方式</p>
      </div>
    </div>
  );
}
