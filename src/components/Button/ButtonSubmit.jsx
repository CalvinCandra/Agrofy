export default function ButtonSubmit(props) {
  const { text } = props;
  return (
    <button
      type="submit"
      className="w-full text-white bg-main-green hover:bg-main-green-hover focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {text}
    </button>
  );
}
