function Project({ data, openPopup }) {
  let { name, description, image } = data;

  return (
    <li className="projects__item" style={{ backgroundImage: `url(${image})` }}>
      <div className="projects__card">
        <h3 className="projects__project-name">{name}</h3>
        <p className="projects__description">{description}</p>
        <button
          className="projects__button"
          type="button"
          onClick={() => openPopup(data)}
        >
          See more
        </button>
      </div>
    </li>
  );
}

export default Project;
