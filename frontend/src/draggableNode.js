// draggableNode.js

export const DraggableNode = ({ type, label, color }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        style={{ 
          cursor: 'grab',
          width: '100px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '4px',
          backgroundColor: color,
          color: '#ffffff',
          fontSize: '12px',
          fontWeight: '500',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          transition: 'all 0.1s ease-in-out',
          userSelect: 'none',
          '&:hover': {
            boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
          }
        }}
        draggable
      >
        {label}
      </div>
    );
  };
  