import React from 'react'
import { Tab } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Details', render: () => 
  <Tab.Pane>
      
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam pariatur rerum iste temporibus eius assumenda, blanditiis culpa, nostrum corporis aliquid ipsa fuga reiciendis quidem placeat accusamus aspernatur esse minima?

    In all cases, we recommend to use the LESS package and tune it into your build system with Webpack. The LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for Webpack and requires additional configuration.

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam pariatur rerum iste temporibus eius assumenda, blanditiis culpa, nostrum corporis aliquid ipsa fuga reiciendis quidem placeat accusamus aspernatur esse minima?

    In all cases, we recommend to use the LESS package and tune it into your build system with Webpack. The LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for Webpack and requires additional configuration.

    In all cases, we recommend to use the LESS package and tune it into your build system with Webpack. The LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for Webpack and requires additional configuration.

    In all cases, we recommend to use the LESS package and tune it into your build system with Webpack. The LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for Webpack and requires additional configuration.

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam pariatur rerum iste temporibus eius assumenda, blanditiis culpa, nostrum corporis aliquid ipsa fuga reiciendis quidem placeat accusamus aspernatur esse minima?

    In all cases, we recommend to use the LESS package and tune it into your build system with Webpack. The LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for Webpack and requires additional configuration.

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam pariatur rerum iste temporibus eius assumenda, blanditiis culpa, nostrum corporis aliquid ipsa fuga reiciendis quidem placeat accusamus aspernatur esse minima?

    In all cases, we recommend to use the LESS package and tune it into your build system with Webpack. The LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for Webpack and requires additional configuration.

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam pariatur rerum iste temporibus eius assumenda, blanditiis culpa, nostrum corporis aliquid ipsa fuga reiciendis quidem placeat accusamus aspernatur esse minima?

    In all cases, we recommend to use the LESS package and tune it into your build system with Webpack. The LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for Webpack and requires additional configuration.

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam pariatur rerum iste temporibus eius assumenda, blanditiis culpa, nostrum corporis aliquid ipsa fuga reiciendis quidem placeat accusamus aspernatur esse minima?

    In all cases, we recommend to use the LESS package and tune it into your build system with Webpack. The LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for Webpack and requires additional configuration.

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam pariatur rerum iste temporibus eius assumenda, blanditiis culpa, nostrum corporis aliquid ipsa fuga reiciendis quidem placeat accusamus aspernatur esse minima?

    In all cases, we recommend to use the LESS package and tune it into your build system with Webpack. The LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for Webpack and requires additional configuration.

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam pariatur rerum iste temporibus eius assumenda, blanditiis culpa, nostrum corporis aliquid ipsa fuga reiciendis quidem placeat accusamus aspernatur esse minima?

    In all cases, we recommend to use the LESS package and tune it into your build system with Webpack. The LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for Webpack and requires additional configuration.
</Tab.Pane> },

{ menuItem: 'Avalible', render: () => 
<Tab.Pane>

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam pariatur rerum iste temporibus eius assumenda, blanditiis culpa, nostrum corporis aliquid ipsa fuga reiciendis quidem placeat accusamus aspernatur esse minima?
    In all cases, we recommend to use the LESS package and tune it into your build system with Webpack. The LESS package also does not depend on Gulp and other cruft things. However, this package is not friendly for Webpack and requires additional configuration.
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nam pariatur rerum iste temporibus eius assumenda, blanditiis culpa, nostrum corporis aliquid ipsa fuga reiciendis quidem placeat accusamus aspernatur esse minima?
      </Tab.Pane> },
]

const ToggleTab = () => <Tab panes={panes} />

export default ToggleTab