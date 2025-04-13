import React from 'react'

const Toolbar = ({editor}) => {
  return (
    <div className='flex flex-row items-center'>

      {/* text types */}
      <button 
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${editor.isActive("bold") ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 `}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24"
          viewBox="0 0 24 24" 
          style={{fill: 'currentcolor',transform: '',msFilter:''}}><path d="M17.061 11.22A4.46 4.46 0 0 0 18 8.5C18 6.019 15.981 4 13.5 4H6v15h8c2.481 0 4.5-2.019 4.5-4.5a4.48 4.48 0 0 0-1.439-3.28zM13.5 7c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5H9V7h4.5zm.5 9H9v-3h5c.827 0 1.5.673 1.5 1.5S14.827 16 14 16z"></path></svg>
      </button>

      <button 
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${editor.isActive("italic") ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 `}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          style={{fill: 'currentcolor',transform: '',msFilter:''}}><path d="M19 7V4H9v3h2.868L9.012 17H5v3h10v-3h-2.868l2.856-10z"></path></svg>
      </button>

      <button 
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`${editor.isActive("underline") ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 `}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          style={{fill: 'currentcolor',transform: '',msFilter:''}}><path d="M5 18h14v2H5zM6 4v6c0 3.309 2.691 6 6 6s6-2.691 6-6V4h-2v6c0 2.206-1.794 4-4 4s-4-1.794-4-4V4H6z"></path></svg>
      </button>

      <button 
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`${editor.isActive("highlight") ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 `}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          style={{fill: 'currentcolor',transform: '', msFilter:''}}><path d="m20.707 5.826-3.535-3.533a.999.999 0 0 0-1.408-.006L7.096 10.82a1.01 1.01 0 0 0-.273.488l-1.024 4.437L4 18h2.828l1.142-1.129 3.588-.828c.18-.042.345-.133.477-.262l8.667-8.535a1 1 0 0 0 .005-1.42zm-9.369 7.833-2.121-2.12 7.243-7.131 2.12 2.12-7.242 7.131zM4 20h16v2H4z"></path></svg>
      </button>

      <button 
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${editor.isActive("code") ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 `}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          style={{fill: 'currentcolor',transform: '',msFilter:''}}><path d="M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z"></path></svg>
      </button>

      {/* heading types */}
      <button 
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${editor.isActive("heading", { level: 1 }) ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 font-bold`}>
        H1
      </button>

      <button 
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${editor.isActive("heading", { level: 2 }) ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 font-bold`}>
        H2
      </button>

      <button 
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${editor.isActive("heading", { level: 3 }) ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 font-bold`}>
        H3
      </button>

      {/* list types */}
      <button 
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${editor.isActive("bulletList") ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 font-bold`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          style={{fill: 'currentcolor',transform: '',msFilter:''}}><path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path></svg>
      </button>

      <button 
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${editor.isActive("orderedList") ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 font-bold`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          style={{fill: 'currentcolor',transform: '',msFilter:''}}><path d="M5.282 12.064c-.428.328-.72.609-.875.851-.155.24-.249.498-.279.768h2.679v-.748H5.413c.081-.081.152-.151.212-.201.062-.05.182-.142.361-.27.303-.218.511-.42.626-.604.116-.186.173-.375.173-.578a.898.898 0 0 0-.151-.512.892.892 0 0 0-.412-.341c-.174-.076-.419-.111-.733-.111-.3 0-.537.038-.706.114a.889.889 0 0 0-.396.338c-.094.143-.159.346-.194.604l.894.076c.025-.188.074-.317.147-.394a.375.375 0 0 1 .279-.108c.11 0 .2.035.272.108a.344.344 0 0 1 .108.258.55.55 0 0 1-.108.297c-.074.102-.241.254-.503.453zm.055 6.386a.398.398 0 0 1-.282-.105c-.074-.07-.128-.195-.162-.378L4 18.085c.059.204.142.372.251.506.109.133.248.235.417.306.168.069.399.103.692.103.3 0 .541-.047.725-.14a1 1 0 0 0 .424-.403c.098-.175.146-.354.146-.544a.823.823 0 0 0-.088-.393.708.708 0 0 0-.249-.261 1.015 1.015 0 0 0-.286-.11.943.943 0 0 0 .345-.299.673.673 0 0 0 .113-.383.747.747 0 0 0-.281-.596c-.187-.159-.49-.238-.909-.238-.365 0-.648.072-.847.219-.2.143-.334.353-.404.626l.844.151c.023-.162.067-.274.133-.338s.151-.098.257-.098a.33.33 0 0 1 .241.089c.059.06.087.139.087.238 0 .104-.038.193-.117.27s-.177.112-.293.112a.907.907 0 0 1-.116-.011l-.045.649a1.13 1.13 0 0 1 .289-.056c.132 0 .237.041.313.126.077.082.115.199.115.352 0 .146-.04.266-.119.354a.394.394 0 0 1-.301.134zm.948-10.083V5h-.739a1.47 1.47 0 0 1-.394.523c-.168.142-.404.262-.708.365v.754a2.595 2.595 0 0 0 .937-.48v2.206h.904zM9 6h11v2H9zm0 5h11v2H9zm0 5h11v2H9z"></path></svg>
      </button>

      {/* text alignment */}
      <button 
        onClick={() => editor.chain().focus().focus().setTextAlign('left').run()}
        className={`${editor.isActive({ textAlign: 'left' }) ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 font-bold`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24"
          viewBox="0 0 24 24" 
          style={{fill: 'currentcolor',transform: '',msFilter:''}}><path d="M4 19h16v2H4zm0-4h11v2H4zm0-4h16v2H4zm0-8h16v2H4zm0 4h11v2H4z"></path></svg>
      </button>

      <button 
        onClick={() => editor.chain().focus().focus().setTextAlign('center').run()}
        className={`${editor.isActive({ textAlign: 'center' }) ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 font-bold`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          style={{fill: 'currentcolor',transform: '',msFilter:''}}><path d="M4 19h16v2H4zm3-4h10v2H7zm-3-4h16v2H4zm0-8h16v2H4zm3 4h10v2H7z"></path></svg>
      </button>

      <button 
        onClick={() => editor.chain().focus().focus().setTextAlign('right').run()}
        className={`${editor.isActive({ textAlign: 'right' }) ? 'text-emerald-500' : '' } outline-none flex p-2 hover:text-emerald-500 hover:scale-125 active:scale-90 transition duration-300 font-bold`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          style={{fill: 'currentcolor',transform: '',msFilter:''}}><path d="M4 19h16v2H4zm5-4h11v2H9zm-5-4h16v2H4zm0-8h16v2H4zm5 4h11v2H9z"></path></svg>
      </button>
      

    </div>
  )
}

export default Toolbar