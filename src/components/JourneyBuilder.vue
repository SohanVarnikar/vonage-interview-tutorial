<template>
  <div class="flex flex-col h-screen font-sans">
    <div class="bg-gray-100 border-b border-gray-300 p-4">
      <h2 class="text-2xl font-medium text-gray-700 m-0 mb-4">
        Journey Builder Dashboard
      </h2>
      <div class="flex items-center justify-between gap-4 flex-wrap">
        <div class="flex flex-wrap gap-3">
          <button
            v-for="nodeType in nodeTypes"
            :key="nodeType.type"
            draggable="true"
            class="group relative flex items-center gap-2 px-6 py-3 border-2 border-gray-400 rounded-xl bg-gray-200 cursor-grab active:cursor-grabbing transition-all duration-300 text-xs font-semibold shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gray-300 hover:border-gray-500 active:scale-100 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
            @dragstart="onDragStart($event, nodeType)"
            @click="addNode(nodeType.type)"
          >
            <div
              class="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300 group-hover:scale-110"
            >
              <!-- Start Icon -->
              <svg
                v-if="nodeType.type === 'start'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 text-gray-700 transition-all duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <polygon points="5,3 19,12 5,21" fill="currentColor" />
              </svg>
              <!-- Email Icon -->
              <svg
                v-else-if="nodeType.type === 'email'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 text-gray-700 transition-all duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <!-- Wait/Clock Icon -->
              <svg
                v-else-if="nodeType.type === 'wait'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 text-gray-700 transition-all duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <!-- Condition/Branch Icon -->
              <svg
                v-else-if="nodeType.type === 'condition'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 text-gray-700 transition-all duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <path d="M6 3l6 6-6 6" />
                <path d="M12 3l6 6-6 6" />
              </svg>
              <!-- Input Icon -->
              <svg
                v-else-if="nodeType.type === 'inputtext'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 text-gray-700 transition-all duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="7" y1="12" x2="17" y2="12" />
              </svg>
              <!-- Output Icon -->
              <svg
                v-else-if="nodeType.type === 'outputtext'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 text-gray-700 transition-all duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="7" y1="9" x2="17" y2="9" />
                <line x1="7" y1="13" x2="17" y2="13" />
                <line x1="7" y1="17" x2="13" y2="17" />
              </svg>
              <!-- End/Check Icon -->
              <svg
                v-else-if="nodeType.type === 'end'"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4 text-gray-700 transition-all duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <path d="M9 11l3 3L22 4" />
                <path
                  d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
                />
              </svg>
            </div>
            <span class="font-semibold text-sm text-gray-800">{{
              nodeType.label
            }}</span>
            <!-- Subtle gradient overlay on hover -->
            <div
              class="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </button>
        </div>

        <!-- Action Buttons aligned to right -->
        <div class="flex justify-end">
          <button
            @click="saveJourney"
            class="group relative px-6 py-3 border-2 border-blue-500 rounded-xl cursor-pointer font-bold text-white bg-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
          >
            <div class="flex items-center gap-2">
              <div
                class="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300 group-hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-3 h-3 transition-all duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path
                    d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                  />
                  <polyline points="17,21 17,13 7,13 7,21" />
                  <polyline points="7,3 7,8 15,8" />
                </svg>
              </div>
              <span class="text-xs font-semibold">Save Journey</span>
            </div>
            <div
              class="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </button>
        </div>
      </div>
    </div>

    <div class="flex-1 relative bg-gray-50">
      <VueFlow
        v-model="elements"
        class="vue-flow bg-gray-50"
        :default-zoom="1"
        :min-zoom="0.1"
        :max-zoom="4"
        :snap-to-grid="true"
        :snap-grid="[20, 20]"
        :default-edge-options="{ type: 'smoothstep', animated: true }"
        @node-click="onNodeClick"
        @edge-click="onEdgeClick"
        @connect="onConnect"
        @drop="onDrop"
        @dragover.prevent
        @dragenter.prevent
      >
        <Background pattern-color="#ddd" :gap="20" variant="dots" />
        <MiniMap />
        <Controls />

        <!-- Custom Node Types -->
        <template #node-start="{ data, id }">
          <StartNode
            :data="data"
            :id="id"
            @remove="removeNode"
            @update="handleNodeUpdate(id, $event)"
          />
        </template>

        <template #node-email="{ data, id }">
          <EmailNode
            :data="data"
            :id="id"
            @remove="removeNode"
            @update="handleNodeUpdate(id, $event)"
          />
        </template>

        <template #node-wait="{ data, id }">
          <WaitNode
            :data="data"
            :id="id"
            @remove="removeNode"
            @update="handleNodeUpdate(id, $event)"
          />
        </template>

        <template #node-condition="{ data, id }">
          <ConditionNode
            :data="data"
            :id="id"
            @remove="removeNode"
            @update="handleNodeUpdate(id, $event)"
          />
        </template>

        <template #node-inputtext="{ data, id }">
          <InputNode
            :data="data"
            :id="id"
            @remove="removeNode"
            @update="handleNodeUpdate(id, $event)"
          />
        </template>

        <template #node-outputtext="{ data, id }">
          <OutputNode
            :data="data"
            :id="id"
            @remove="removeNode"
            @update="handleNodeUpdate(id, $event)"
          />
        </template>

        <template #node-end="{ data, id }">
          <EndNode :data="data" :id="id" @remove="removeNode" />
        </template>
      </VueFlow>
    </div>

    <!-- Node Properties Panel -->
    <div
      v-if="selectedNode"
      class="absolute top-20 right-5 w-80 bg-white border border-gray-200 rounded-lg p-4 shadow-lg"
    >
      <h3 class="text-lg text-gray-700 mb-4 m-0">Properties</h3>
      <div class="mb-4">
        <label class="block mb-1 font-medium text-gray-700">Node Name:</label>
        <input
          v-model="selectedNode.data.label"
          @input="updateNode"
          class="w-full p-2 border border-gray-200 rounded text-sm"
        />
      </div>
      <div v-if="selectedNode.type === 'email'" class="mb-4">
        <label class="block mb-1 font-medium text-gray-700">Subject:</label>
        <input
          v-model="selectedNode.data.subject"
          @input="updateNode"
          class="w-full p-2 border border-gray-200 rounded text-sm mb-4"
        />
        <label class="block mb-1 font-medium text-gray-700">Template:</label>
        <textarea
          v-model="selectedNode.data.template"
          @input="updateNode"
          class="w-full p-2 border border-gray-200 rounded text-sm min-h-20 resize-y"
        ></textarea>
      </div>
      <div v-if="selectedNode.type === 'wait'" class="mb-4">
        <label class="block mb-1 font-medium text-gray-700">Duration:</label>
        <input
          v-model="selectedNode.data.duration"
          @input="updateNode"
          class="w-full p-2 border border-gray-200 rounded text-sm mb-4"
        />
        <select
          v-model="selectedNode.data.unit"
          @change="updateNode"
          class="w-full p-2 border border-gray-200 rounded text-sm"
        >
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
          <option value="days">Days</option>
        </select>
      </div>
      <div v-if="selectedNode.type === 'condition'" class="mb-4">
        <label class="block mb-1 font-medium text-gray-700">Condition:</label>
        <select
          v-model="selectedNode.data.condition"
          @change="updateNode"
          class="w-full p-2 border border-gray-200 rounded text-sm"
        >
          <option value="opened">Email Opened</option>
          <option value="clicked">Link Clicked</option>
          <option value="replied">Replied</option>
        </select>
      </div>
    </div>

    <!-- Alert Component -->
    <Alert
      :show="alertState.show"
      :type="alertState.type"
      :title="alertState.title"
      :message="alertState.message"
      :auto-close="alertState.autoClose"
      :duration="alertState.duration"
      @close="closeAlert"
    />
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";

// Import custom nodes
import StartNode from "./nodes/StartNode.vue";
import EmailNode from "./nodes/EmailNode.vue";
import WaitNode from "./nodes/WaitNode.vue";
import ConditionNode from "./nodes/ConditionNode.vue";
import EndNode from "./nodes/EndNode.vue";
import InputNode from "./nodes/InputNode.vue";
import OutputNode from "./nodes/OutputNode.vue";
import Alert from "./Alert.vue";

const { findNode, addNodes, addEdges, removeNodes, removeEdges, project } =
  useVueFlow();

// Reactive state
const elements = ref([]);
const selectedNode = ref(null);
let nodeIdCounter = 1;
let autoEdgeCounter = 1;

// Utility functions for element filtering
const getNodes = () => elements.value.filter((el) => !el.source);
const getEdges = () => elements.value.filter((el) => el.source);

// Get text content from node for auto-connection analysis
const getNodeTextContent = (node) => {
  if (node.type === "outputtext" && node.data.outputMessage) {
    return node.data.outputMessage;
  } else if (node.type === "email" && node.data.content) {
    return node.data.content;
  }
  return "";
};

// Remove auto-generated edges for a specific node (source or target)
const removeAutoEdgesForNode = (nodeId) => {
  const autoEdges = elements.value.filter(
    (el) =>
      el.source &&
      el.isAutoGenerated === true &&
      (el.source === nodeId || el.target === nodeId),
  );
  if (autoEdges.length > 0) {
    removeEdges(autoEdges.map((edge) => edge.id));
  }
};

// Alert state management
const alertState = ref({
  show: false,
  type: "info",
  title: "",
  message: "",
  autoClose: true,
  duration: 5000,
});

// Show alert function
const showAlert = (type, title, message, options = {}) => {
  alertState.value = {
    show: true,
    type,
    title,
    message,
    autoClose: options.autoClose !== false,
    duration: options.duration || 5000,
  };
};

// Close alert function
const closeAlert = () => {
  alertState.value.show = false;
};

// Variable extraction function
const extractVariables = (text) => {
  if (!text) return [];
  const regex = /\{([^}]+)\}/g;
  const matches = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
};

// Find nodes by name and type
const findNodesByNameAndType = (name, nodeType) => {
  return elements.value.filter(
    (el) => !el.source && el.type === nodeType && el.data.name === name,
  );
};

// Create auto-connection between nodes
const createAutoConnection = (sourceId, targetId, variableName) => {
  // Check if connection already exists
  const existingEdge = elements.value.find(
    (el) => el.source === sourceId && el.target === targetId,
  );

  if (!existingEdge) {
    const autoEdge = {
      id: `auto-${autoEdgeCounter++}`,
      source: sourceId,
      target: targetId,
      type: "smoothstep",
      animated: true,
      isAutoGenerated: true,
      variableName,
      style: {
        stroke: "#10b981",
        strokeWidth: 2,
        strokeDasharray: "5,5",
      },
      label: `{${variableName}}`,
    };
    addEdges([autoEdge]);
    console.log(
      `Auto-connected: ${sourceId} → ${targetId} (variable: ${variableName})`,
    );
  }
};

// Update auto connections for a node
const updateAutoConnections = (nodeId) => {
  const node = findNode(nodeId);
  if (!node) return;

  // Remove existing auto-generated edges for this node
  removeAutoEdgesForNode(nodeId);

  const textToAnalyze = getNodeTextContent(node);
  if (textToAnalyze) {
    const variables = extractVariables(textToAnalyze);

    // For each variable, find matching input nodes
    variables.forEach((variableName) => {
      const inputNodes = findNodesByNameAndType(variableName, "inputtext");

      // Create auto-connections from each matching input node
      inputNodes.forEach((inputNode) => {
        createAutoConnection(inputNode.id, nodeId, variableName);
      });
    });
  }
};

// Update auto connections when input node names change
const updateAutoConnectionsForInputChange = (inputNodeId, oldName, newName) => {
  // Remove auto-edges that used the old name
  if (oldName) {
    const autoEdges = elements.value.filter(
      (el) =>
        el.source === inputNodeId &&
        el.isAutoGenerated === true &&
        el.variableName === oldName,
    );
    if (autoEdges.length > 0) {
      removeEdges(autoEdges.map((edge) => edge.id));
    }
  }

  // Create new connections for nodes that reference the new name
  if (newName) {
    const referencingNodes = getNodes().filter((node) => {
      const textToCheck = getNodeTextContent(node);
      return textToCheck && extractVariables(textToCheck).includes(newName);
    });

    referencingNodes.forEach((node) => {
      createAutoConnection(inputNodeId, node.id, newName);
    });
  }
};
const nodeTypes = [
  { type: "start", label: "Start" },
  { type: "inputtext", label: "Input" },
  { type: "outputtext", label: "Output" },
  { type: "email", label: "Email" },
  { type: "wait", label: "Wait" },
  { type: "condition", label: "Condition" },
  { type: "end", label: "End" },
];

// Add a new node to the flow
const addNode = (nodeType) => {
  const newNode = {
    id: `${nodeType}-${nodeIdCounter++}`,
    type: nodeType,
    position: {
      x: Math.random() * 500 + 100,
      y: Math.random() * 300 + 100,
    },
    data: getDefaultNodeData(nodeType),
  };

  addNodes([newNode]);
};

// Get default data for different node types
const getDefaultNodeData = (nodeType) => {
  const baseData = {
    label: `${nodeType.charAt(0).toUpperCase() + nodeType.slice(1)} Node`,
  };

  switch (nodeType) {
    case "email":
      return { ...baseData, subject: "Welcome!", template: "Hello there!" };
    case "wait":
      return { ...baseData, duration: 1, unit: "days" };
    case "condition":
      return { ...baseData, condition: "opened" };
    default:
      return baseData;
  }
};

// Drag start handler
const onDragStart = (event, nodeType) => {
  if (event.dataTransfer) {
    event.dataTransfer.setData("application/vueflow", nodeType.type);
    event.dataTransfer.effectAllowed = "move";
  }
};

// Drop handler
const onDrop = (event) => {
  const nodeType = event.dataTransfer?.getData("application/vueflow");

  if (!nodeType) {
    return;
  }

  // Get the VueFlow container's bounding rectangle
  const flowContainer = event.currentTarget;
  const { left, top } = flowContainer.getBoundingClientRect();

  // Calculate position relative to the container and convert to flow coordinates
  // Offset by half the typical node size to center the node on cursor
  const position = project({
    x: event.clientX - left - 75, // Offset by approximate half node width
    y: event.clientY - top - 40, // Offset by approximate half node height
  });

  const newNode = {
    id: `${nodeType}-${nodeIdCounter++}`,
    type: nodeType,
    position,
    data: getDefaultNodeData(nodeType),
  };

  addNodes([newNode]);
};

// Node click handler
const onNodeClick = ({ node }) => {
  // Skip properties panel for start, email, input and output nodes (they have inline editing)
  if (
    node.type === "start" ||
    node.type === "email" ||
    node.type === "inputtext" ||
    node.type === "outputtext"
  ) {
    return;
  }
  selectedNode.value = node;
};

// Edge click handler
const onEdgeClick = ({ edge }) => {
  console.log("Edge clicked:", edge);
};

// Handle connection between nodes
const onConnect = (connection) => {
  const newEdge = {
    id: `e-${connection.source}-${connection.target}`,
    source: connection.source,
    target: connection.target,
    type: "smoothstep",
    animated: true,
    style: { stroke: "#3b82f6", strokeWidth: 3 },
  };
  addEdges([newEdge]);
};

// Update node data
const updateNode = () => {
  // Force reactivity update
  nextTick(() => {
    const node = findNode(selectedNode.value.id);
    if (node) {
      Object.assign(node.data, selectedNode.value.data);
    }
  });
};

// Handle inline node updates
const handleNodeUpdate = (nodeId, newData) => {
  const node = findNode(nodeId);
  if (!node) return;

  const oldData = { ...node.data };
  Object.assign(node.data, newData);

  // Handle auto-connections based on node type and data changes
  if (node.type === "outputtext" || node.type === "email") {
    // Update auto-connections when content changes
    updateAutoConnections(nodeId);
  } else if (node.type === "inputtext") {
    // Handle input node name changes
    const oldName = oldData.name;
    const newName = newData.name;
    if (oldName !== newName) {
      updateAutoConnectionsForInputChange(nodeId, oldName, newName);
    }
  }
};

// Remove specific node
const removeNode = (nodeId) => {
  // Remove auto-generated edges associated with this node
  removeAutoEdgesForNode(nodeId);

  removeNodes([nodeId]);
  if (selectedNode.value?.id === nodeId) {
    selectedNode.value = null;
  }
};

// Save journey configuration
const saveJourney = async () => {};

// Initialize with a sample flow
const initializeSampleFlow = () => {
  const sampleNodes = [
    {
      id: "start-1",
      type: "start",
      position: { x: 100, y: 100 },
      data: { label: "Journey Start" },
    },
    {
      id: "email-1",
      type: "email",
      position: { x: 300, y: 100 },
      data: {
        label: "Welcome Email",
        subject: "Welcome!",
        template: "Welcome to our platform!",
      },
    },
    {
      id: "wait-1",
      type: "wait",
      position: { x: 500, y: 100 },
      data: { label: "Wait 2 days", duration: 2, unit: "days" },
    },
  ];

  const sampleEdges = [
    {
      id: "e-start-email",
      source: "start-1",
      target: "email-1",
    },
    {
      id: "e-email-wait",
      source: "email-1",
      target: "wait-1",
    },
  ];

  addNodes(sampleNodes);
  addEdges(sampleEdges);
};

// Initialize sample flow on mount
initializeSampleFlow();
</script>

<style scoped>
/* Comprehensive VueFlow selection styling override */
:deep(.vue-flow__node.selected),
:deep(.vue-flow__node.selected:hover),
:deep(.vue-flow__node.selected:focus),
:deep(.vue-flow__node:focus),
:deep(.vue-flow__node.selecting),
:deep(.vue-flow__node.selected .vue-flow__node-default),
:deep(.vue-flow__node.selected .vue-flow__node-input),
:deep(.vue-flow__node.selected .vue-flow__node-output) {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}

/* Remove any selection indicators */
:deep(.vue-flow__node-selected),
:deep(.vue-flow__nodesselection),
:deep(.vue-flow__selection) {
  display: none !important;
}

/* Ensure no selection styling on the wrapper */
:deep(.vue-flow__renderer) {
  outline: none !important;
}
</style>
