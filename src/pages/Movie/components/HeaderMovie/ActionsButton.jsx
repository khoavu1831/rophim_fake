function ActionButtons({icon, label}) {
  return (
    <div className="love-btn group flex flex-col items-center gap-1.5 p-2 text-white text-[15px] cursor-pointer">
      <i className={`fa-solid ${icon} group-hover:text-mainblue`}></i>
      <h4 className="ml-2 text-nowrap">{label}</h4>
    </div>
  )
}

export default ActionButtons