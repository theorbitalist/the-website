import React from 'react'
import { useState } from "react"
import { X, Upload, ChevronDown } from "lucide-react"

const CreatePost = () => {
    const [postTitle, setPostTitle] = useState("")
  const [selectedPlatform, setSelectedPlatform] = useState("Google")
  const [postType, setPostType] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState("")
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false)
  const [showPostTypeDropdown, setShowPostTypeDropdown] = useState(false)

  const platforms = ["Google", "Facebook", "Instagram", "Twitter", "LinkedIn"]
  const postTypes = ["Standard Post", "Offer", "Event", "Product"]

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault()
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()])
      }
      setTagInput("")
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const insertTemplateTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag])
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#ffffff] shadow-xl w-full max-w-[600px] relative">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e7e7e7]">
          <h2 className="text-lg font-semibold text-(--grey)">Create New Post</h2>
          <button className="text-(--grey) hover:text-(--less-white)">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          {/* Description Text */}
          <p className="text-sm text-(--gray) mb-6">
            Regular posts keep prospects engaged, informing them about updates and promotions, which boosts visibility
            and drives customer actions.
          </p>

          {/* Post Title */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-(--grey) mb-2">Post Title</label>
            <input
              type="text"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              className="w-full px-3 py-2 border border-(--grey) rounded-md focus:outline-none focus:ring-2 focus:ring-[#da1414] focus:border-transparent"
            />
          </div>

          {/* Platform and Post Type Row */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="relative">
              <label className="block text-sm font-medium text-(--grey) mb-2">Select Platform</label>
              <button
                onClick={() => setShowPlatformDropdown(!showPlatformDropdown)}
                className="w-full px-3 py-2 border border-(--grey) rounded-md bg-[#ffffff] flex items-center justify-between text-sm"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-(--grey)">{selectedPlatform}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-(--grey)" />
              </button>
              {showPlatformDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-[#ffffff] border border-(--grey) rounded-md shadow-lg">
                  {platforms.map((platform) => (
                    <button
                      key={platform}
                      onClick={() => {
                        setSelectedPlatform(platform)
                        setShowPlatformDropdown(false)
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-(--grey) hover:bg-[#e7e7e7]"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-(--grey) mb-2">Post Type</label>
              <button
                onClick={() => setShowPostTypeDropdown(!showPostTypeDropdown)}
                className="w-full px-3 py-2 border border-(--grey) rounded-md bg-[#ffffff] flex items-center justify-between text-sm text-(--grey)"
              >
                <span className={postType ? "text-(--grey)" : "text-gray-500"}>{postType || "Select"}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
              {showPostTypeDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-[#ffffff] border border-(--grey) rounded-md shadow-lg">
                  {postTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setPostType(type)
                        setShowPostTypeDropdown(false)
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-(--grey) hover:bg-[#e7e7e7]"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-(--grey) mb-2">Description</label>
            <textarea
              placeholder="Write Something..."
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-(--grey) rounded-md focus:outline-none focus:ring-2 focus:ring-[#da1414] focus:border-transparent resize-none text-sm placeholder:text-gray-400"
            />
          </div>

          {/* Template Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            <button
              onClick={() => insertTemplateTag("Name")}
              className="px-3 py-1.5 bg-[#e7e7e7] text-(--grey) text-xs font-medium hover:bg-gray-300"
            >
              + Name
            </button>
            <button
              onClick={() => insertTemplateTag("Business Address")}
              className="px-3 py-1.5 bg-[#e7e7e7] text-(--grey) text-xs font-medium hover:bg-gray-300"
            >
              + Business Address
            </button>
            <button
              onClick={() => insertTemplateTag("City")}
              className="px-3 py-1.5 bg-[#e7e7e7] text-(--grey) text-xs font-medium hover:bg-gray-300"
            >
              + City
            </button>
            <button
              onClick={() => insertTemplateTag("State")}
              className="px-3 py-1.5 bg-[#e7e7e7] text-[#171616] text-xs font-medium hover:bg-gray-300"
            >
              + State
            </button>
            <button
              onClick={() => insertTemplateTag("Pcode")}
              className="px-3 py-1.5 bg-[#e7e7e7] text-[#171616] text-xs font-medium hover:bg-gray-300"
            >
              + Pcode
            </button>
            <button
              onClick={() => insertTemplateTag("Area")}
              className="px-3 py-1.5 bg-[#e7e7e7] text-[#171616] text-xs font-medium hover:bg-gray-300"
            >
              + Area
            </button>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-[#171616] mb-2">Tags</label>
            <div className="w-full px-3 py-2 border border-[#e7e7e7] rounded-md min-h-[42px] flex flex-wrap gap-2 items-center">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-[#da1414] text-[#ffffff] text-xs font-medium"
                >
                  {tag}
                  <button onClick={() => handleRemoveTag(tag)} className="hover:opacity-80">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
                placeholder={tags.length === 0 ? "Type and press Enter to add tags..." : ""}
                className="flex-1 min-w-[120px] outline-none text-sm"
              />
            </div>
          </div>

          {/* Add Media */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#171616] mb-2">Add Media</label>
            <div className="border-2 border-dashed border-[#e7e7e7] rounded-md px-6 py-10 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-full bg-[#e7e7e7] flex items-center justify-center">
                  <Upload className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                Drag and Drop or{" "}
                <span className="text-[#da1414] font-medium cursor-pointer hover:underline">Click to upload</span>
              </p>
              <p className="text-xs text-gray-400">Supported formats: .CSV or XLS. Max Size: 25MB</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#e7e7e7]">
          <button className="px-5 py-2 text-sm font-medium text-[#171616] hover:bg-[#e7e7e7]">Cancel</button>
          <button className="px-5 py-2 text-sm font-medium text-[#ffffff] bg-[#da1414] hover:bg-[#c01212]">
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
