export default function TextArea1() {
  return (
    <>
      <div className="ui-content mb20">
        <div className="form-style1 text-center ">
          <label className="form-label fw500 fz16 dark-color">YOUR DREAM</label>
          <textarea
            name="text"
            cols={30}
            rows={7}
            placeholder="Your dream is here!"
          />
        </div>
      </div>
    </>
  );
}
