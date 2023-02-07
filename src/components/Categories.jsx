import React from 'react';

function Categories({ value, onChangeCategory }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ['Всі', 'Вогняний', 'Водяний', "Трав'яний", 'Електричний', 'Психічний'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
