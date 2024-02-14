import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";


const ReactPhotoSphereViewer = dynamic(
  () =>
    import("react-photo-sphere-viewer").then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);

const PanoramicImage = ({ isOpen, onClose, imageUrl }) => {
  const viewerRef = useRef();

  useEffect(() => {
    if (isOpen && viewerRef.current && viewerRef.current.viewer) {
      viewerRef.current.viewer.resize(); // Resize the viewer when the modal opens
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent bg="rgba(0, 0, 0, 0.6)">
        <ModalBody p={0} h="100vh">
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
            }}
          >
            <ReactPhotoSphereViewer
              ref={viewerRef}
              src={imageUrl}
              height={"100%"}
              width={"100%"}
            />
            <button
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                padding: "10px",
                color: "white",
                cursor: "pointer",
              }}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PanoramicImage;
