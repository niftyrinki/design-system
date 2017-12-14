import React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import { TooltipHoverArea } from '../tooltips/Tooltip';

const propTypes = {
  size: React.PropTypes.oneOf(['small', 'tiny']),
  className: React.PropTypes.string,
  children: React.PropTypes.any,
  onRemove: React.PropTypes.func,
  onEdit: React.PropTypes.func,
  onClick: React.PropTypes.func,
  selected: React.PropTypes.bool,
  tooltip: React.PropTypes.bool,
  actions: React.PropTypes.any,
  kebab: React.PropTypes.any,
};

const defaultProps = {
  size: 'small',
  selected: false,
};

/**
 * `ListItem` renders an item in a list.
 *
 * @example ../../../../docs/ListItem.md
 */
class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onRemove = this.onRemove.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onClick(e) {
    if (e) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(!this.props.selected);
    }
  }

  onRemove(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (this.props.onRemove) {
      this.props.onRemove();
    }
  }

  onEdit(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (this.props.onEdit) {
      this.props.onEdit();
    }
  }

  getIconSize() {
    let iconSize = '12px';

    if (this.props.size === 'tiny') {
      iconSize = '10px';
    }

    return iconSize;
  }

  renderRemove() {
    const iconSize = this.getIconSize();
    let jsx;

    if (this.props.onRemove) {
      jsx = (
        <a className="rc-list-item-action rc-list-item-remove" onClick={ this.onRemove }>
          <Icon type="close" width={ iconSize } height={ iconSize } />
        </a>
      );
    }

    return jsx;
  }

  renderEdit() {
    const iconSize = this.getIconSize();
    let jsx;

    if (this.props.onEdit) {
      jsx = (
        <a className="rc-list-item-action rc-list-item-edit" onClick={ this.onEdit }>
          <Icon type="pencil" width={ iconSize } height={ iconSize } />
        </a>
      );
    }

    return jsx;
  }

  renderKebab() {
    let jsx;

    if (this.props.kebab) {
      jsx = (
        <div className="rc-list-item-action rc-list-item-kebab" >
          { this.props.kebab }
        </div>
      );
    }

    return jsx;
  }

  render() {
    const size = this.props.size;
    const className = classnames('rc-list-item', this.props.className, `rc-list-item-${size}`, {
      'rc-list-item-clickable': this.props.onClick,
      'rc-list-item-selected': this.props.selected,
      'rc-list-item-kebab': this.props.kebab,
    });
    const edit = this.renderEdit();
    const kebab = this.renderKebab();
    const remove = this.renderRemove();
    const actions = this.props.actions;
    const content = this.props.children;

    const props = {
      className: 'rc-list-item-link',
    };

    if (this.onClick) {
      props.onClick = this.onClick;
      props.role = 'button';
    }

    let jsx = (
      <div { ...props }>
        { kebab }
        <span className="rc-list-item-text">
          { content }
        </span>
        <span className="rc-list-item-actions">
          { actions }
          { edit }
          { remove }
        </span>
      </div>
    );

    if (this.props.tooltip) {
      jsx = (
        <TooltipHoverArea anchor="bottom" tooltip={ content }>
          { jsx }
        </TooltipHoverArea>
      );
    }

    return (
      <li className={ className }>
        { jsx }
      </li>
    );
  }
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
