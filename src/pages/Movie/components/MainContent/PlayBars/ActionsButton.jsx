function ActionButtons({icon, label}) {
  return (
    <div className="love-btn group flex flex-col items-center gap-2 p-2 text-white cursor-pointer">
      <i className={`fa-solid ${icon} group-hover:text-mainblue text-[16px]`}></i>
      <h4 className="ml-2 text-nowrap text-[12px]">{label}</h4>
    </div>
  )
}

export default ActionButtons