#![deny(rustdoc::broken_intra_doc_links)]
#![allow(missing_docs)] // until zbus::DBusProxy adds docs to the generated trait
#![doc = include_str!("../README.md")]
#[cfg(all(all(feature = "feature_gtk3", feature = "feature_gtk4"), not(doc)))]
compile_error!("You can't enable both GTK 3 & GTK 4 features at once");

/// Alias for a [`Result`] with the error type `ashpd::Error`.
pub type Result<T> = std::result::Result<T, Error>;

/// Interact with the user's desktop such as taking a screenshot, setting a
/// background or querying the user's location.
pub mod desktop;
/// Interact with the documents store or transfer files across apps.
pub mod documents;
mod error;
mod window_identifier;
pub use self::window_identifier::WindowIdentifier;
/// Spawn commands outside the sandbox or monitor if the running application has
/// received an update & install it.
pub mod flatpak;
mod helpers;
pub use enumflags2;
pub use zbus;
pub use zvariant;

/// Check whether the application is running inside a sandbox.
///
/// **Note** The check is very stupid as is for now.
pub fn is_sandboxed() -> bool {
    std::path::Path::new("/.flatpak-info").exists()
}

pub use self::error::{Error, PortalError};
