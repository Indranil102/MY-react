
const Card = ({channel,myObj}) => {
   console.log(myObj.age)
  return (
    <div>
      <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between text-white">
            <h1 className="font-bold text-cyan-50 ">{channel}</h1>
            <h1>Age{myObj.age}</h1>
          </div>
          <div className="flex  justify-between text-white">
            <p>{myObj.username}</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
