import { Loader2 } from 'lucide-react';
import MessageItem from './MessageItem';

const MessageList = ({
    messages,
    isLoading,
    currentUser,
    chat,
    isSelectionMode,
    selectedMessageIds,
    handleSelectMessage,
    searchMatches,
    currentMatchIndex,
    pinnedMessages,
    starredMessages,
    setReplyingTo,
    setActiveReactionMenu,
    activeReactionMenu,
    handleReaction,
    handleDeleteMessage,
    handleForwardMessage,
    copyToClipboard,
    handleContextMenu,
    searchQuery,
    isTyping,
    messagesEndRef,
    hasMoreMessages,
    isLoadingMoreMessages,
    onLoadMore,
    messagesContainerRef
}) => {
    return (
        <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-white/10"
        >
            {hasMoreMessages && (
                <div className="flex justify-center pb-2">
                    <button
                        onClick={onLoadMore}
                        disabled={isLoadingMoreMessages}
                        className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-gray-300 border border-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoadingMoreMessages ? 'Loading older messages...' : 'Load older messages'}
                    </button>
                </div>
            )}
            {isLoading ? (
                <div className="flex justify-center p-8"><Loader2 className="w-6 h-6 animate-spin text-gray-500" /></div>
            ) : messages.length === 0 ? (
                <div className="text-center text-gray-500 py-20">No messages yet. Say hello!</div>
            ) : (
                messages.map((msg, index) => {
                    const isMatched = searchMatches.includes(index);
                    const isCurrentMatch = searchMatches[currentMatchIndex] === index;
                    const isSelected = selectedMessageIds.includes(msg._id);

                    return (
                        <MessageItem
                            key={msg._id}
                            msg={msg}
                            currentUser={currentUser}
                            chat={chat}
                            isSelectionMode={isSelectionMode}
                            isSelected={isSelected}
                            handleSelectMessage={handleSelectMessage}
                            isMatched={isMatched}
                            isCurrentMatch={isCurrentMatch}
                            pinnedMessages={pinnedMessages}
                            starredMessages={starredMessages}
                            setReplyingTo={setReplyingTo}
                            setActiveReactionMenu={setActiveReactionMenu}
                            activeReactionMenu={activeReactionMenu}
                            handleReaction={handleReaction}
                            handleDeleteMessage={handleDeleteMessage}
                            handleForwardMessage={handleForwardMessage}
                            copyToClipboard={copyToClipboard}
                            handleContextMenu={handleContextMenu}
                            searchQuery={searchQuery}
                            messages={messages}
                        />
                    );
                })
            )}
            {
                isTyping && (
                    <div className="flex justify-start animate-in fade-in duration-300">
                        <div className="bg-white/5 px-4 py-2 rounded-2xl rounded-bl-sm border border-white/5 text-gray-400 text-xs flex items-center gap-2">
                            <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-bounce"></span>
                                <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-bounce delay-150"></span>
                                <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-bounce delay-300"></span>
                            </div>
                            someone is typing...
                        </div>
                    </div>
                )
            }
            <div ref={messagesEndRef} />
        </div >
    );
};

export default MessageList;
